// Add routes for admin login, admin signup, create a course, delete a course, add course content.
const { Router } = require("express")
const { adminAuth } = require("../middlewares/middleware.admin")
const { courseModel } = require("../db")
const { adminModel } = require("../db")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const adminRouter = Router()


adminRouter.post("/signup", async (req, res) => {
    const adminZodSchema = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(32),
        firstName: z.string().min(2).max(20),
        lastName: z.string().min(2).max(20)
    })
    const parsedData = adminZodSchema.safeParse(req.body);
    if (!parsedData.success) {
        const issues = parsedData.error.issues
        return res.status(403).json({
            "error" : issues.map(issue => issue.message)
        })
    }
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 7);
    try {
        await adminModel.create({
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

adminRouter.post("/login", async (req, res) => {
    const adminZodSchema = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(32)
    })
    const parsedData = adminZodSchema.safeParse(req.body);
    if (!parsedData.success) {
        const issues = parsedData.error.issues
        return res.status(403).json({
            "error" : issues.map(issue => issue.message)
        })
    }

    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email
    });
    if (!admin) {
        return res.status(403).json({
            "message": "Email not signed up or incorrect password"
        })
    }
    const match = await bcrypt.compare(password, admin.password);
    if (match) {
        const token = jwt.sign({ adminId: admin._id.toString() }, process.env.ADMIN_SECRET);
        res.status(200).json({
            "token": token,
            "firstName" : admin.first_name,
            "message": "Signin Successful"
        })
    }
    else {
        res.status(403).json({
            "message": "Incorrect password"
        })
    }
})

adminRouter.use(adminAuth);

adminRouter.post("/course/create", async (req, res) => {
    console.log("Createcourse got called")
    const courseZodSchema = z.object({
        title: z.string().min(3).max(60),
        description: z.string().min(3).max(60),
        courseImg: z.string().url(),
        price: z.number().positive().lte(10000),
        category: z.string(),
        language: z.string()
    })
    const parsedData = courseZodSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.send(parsedData.error)
    }
    const adminId = req.adminId;
    const {title, description, courseImg, price, category, language} = req.body;

    try {
        await courseModel.create({
            created_by: adminId,
            title: title,
            description: description,
            courseImg: courseImg,
            price: price,
            category: category,
            language: language
        })

        res.status(200).json({
            "message": "New Course Created"
        })
    } catch (e) {
        res.send(e);
    }
})

adminRouter.put("/course/content", async (req, res) => {
    const adminId = req.adminId;
    const courseZodSchema = z.object({
        title: z.string().min(3).max(60),
        description: z.string().min(3).max(60),
        courseImg: z.string().url(),
        price: z.number().positive().lte(10000),
        category: z.string(),
        language: z.string()
    })

    const parsedData = courseZodSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.send(parsedData.error)
    }
    const courseId = req.headers.courseid;
    const {title, description, courseImg, price, category, language} = req.body;

    try{
        await courseModel.updateOne({
            _id : courseId,
            created_by : adminId
        },
            {
                title: title,
                description: description,
                courseImg: courseImg,
                price: price,
                category: category,
                language: language
            }
        )
    
        res.json({
            "message": "course edited"
        })

    }catch(e){
        res.send(e.error)
    }
})
adminRouter.delete("/delete/:courseid", async(req, res) => {
    const adminId = req.adminId;
    const courseId = req.params.courseid;

    try {
        const course = await courseModel.findOne({ _id: courseId, created_by: adminId });

        if (!course) {
            return res.status(404).json({ message: "Course not found or unauthorized" });
        }

        await courseModel.findByIdAndDelete(courseId);

        res.status(200).json({ message: "Course deleted successfully" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})
adminRouter.get("/courses", async (req, res) => {
    const adminId = req.adminId;
    try {
        const courses = await courseModel.find({created_by: adminId});
        res.status(200).json(courses);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})


module.exports = {
    adminRouter: adminRouter
}