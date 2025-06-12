const { Router } = require("express")
const { userModel, courseModel, purchaseModel } = require("../db")
const { userAuth } = require("../middlewares/middleware.user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const userRouter = Router()


userRouter.post("/signup", async (req, res) => {
    console.log('Sign up route got called')
    const userZodSchema = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(32),
        firstName: z.string().min(2).max(20),
        lastName: z.string().min(2).max(20)
    })
    const parsedData = userZodSchema.safeParse(req.body);
    if (!parsedData.success) {
        const issues = parsedData.error.issues
        return res.status(403).json({
            "error" : issues.map(issue => issue.message)
        })
    }
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 7);
    try {
        await userModel.create({
            email: email,
            password: hashedPassword,
            first_name: firstName,
            last_name: lastName
        })
        res.status(200).json({
            "message": "Signuped up successfully"
        })
    } catch (e) {
        res.json({
            "message" : e.error
        });
    }
})
userRouter.post("/login", async (req, res) => {
    console.log('log in route got called')

    const userZodSchema = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(32)
    })
    const parsedData = userZodSchema.safeParse(req.body);
    if (!parsedData.success) {

        const issues = parsedData.error.issues
        return res.status(403).json({
            "error" : issues.map(issue => issue.message)
        })
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email
    });
    if (!user) {
        return res.status(403).json({
            "message": "Email not signed up or incorrect password"
        })
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
        const token = jwt.sign({ userId: user._id.toString() }, process.env.USER_SECRET);
        res.status(200).json({
            "token": token,
            "firstName" : user.first_name,
            "message": "Signin Successful"
        })
    }
    else {
        res.status(403).json({
            "message": "Incorrect password"
        })
    }
})

userRouter.use(userAuth);

userRouter.get("/purchased-courses", async(req, res) => {
    const userId = req.userId;
    try {
        const purchases = await purchaseModel
            .find({userId : userId })
            .populate({
                path: "courseId"       // expands the courseId => detailed course doc
            });
            const purchasedCourses = purchases.map(p => p.courseId);
            res.json(purchasedCourses)

    } catch (e) {
        res.send(e)
    }
})

module.exports = {
    userRouter: userRouter
}