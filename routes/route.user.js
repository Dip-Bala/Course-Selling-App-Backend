const { Router } = require("express")
const { userModel, courseModel, purchaseModel } = require("../db")
const { userAuth } = require("../middlewares/middleware.user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const userRouter = Router()


userRouter.post("/signup", async (req, res) => {
    const userZodSchema = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(32),
        firstName: z.string().min(2).max(20),
        lastName: z.string().min(2).max(20)
    })
    const parsedData = userZodSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(403).send(parsedData.error)
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
        res.send(e);
    }
})
userRouter.post("/login", async (req, res) => {
    const userZodSchema = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(32)
    })
    const parsedData = userZodSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(403).send(parsedData.error)
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
            "token": token
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
        const purchase = await purchaseModel.find({ userId: userId });
        res.json({ "purchase": purchase })
    } catch (e) {
        res.send(e)
    }
})

module.exports = {
    userRouter: userRouter
}