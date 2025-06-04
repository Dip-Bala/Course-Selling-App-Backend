// Add routes for admin login, admin signup, create a course, delete a course, add course content.

const { Router } = require("express")
const adminRouter = Router()

adminRouter.post("/signup", (req, res) =>{
    res.json({
        "message": "signup"
    })
})

adminRouter.post("/login", (req, res) =>{
    res.json({
        "message": "login"
    })
})
adminRouter.post("/course/create", (req, res) =>{
    res.json({
        "message": "create"
    })
})
adminRouter.put("/course/content", (req, res) =>{
    res.json({
        "message": "login"
    })
})
adminRouter.delete("/delete", (req, res) =>{
    res.json({
        "message": "delete"
    })
})
adminRouter.get("/courses", (req, res) =>{
    res.json({
        "message": "courses"
    })
})
module.exports = {
    adminRouter : adminRouter
}