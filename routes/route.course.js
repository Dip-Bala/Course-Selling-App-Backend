const { Router } = require("express")
const courseRouter = Router()
const { courseModel, purchaseModel } = require("../db")
const { userAuth } = require("../middlewares/middleware.user")

courseRouter.get("/preview", async (req, res) => {
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})

courseRouter.use(userAuth)
//Need to be implemented =>
    // if the user is not logged in then redirect to /user/login route 
//protected route
courseRouter.post("/purchase", async (req, res) => {   
    const userId = req.userId;
    const courseId = req.headers.courseid; //can not use camel casing in headers
    // console.log(courseId)
    try{
        await purchaseModel.create({
            userId : userId,
            courseId : courseId
        })
        res.json({
            "message": "purchase"
        })
    }catch(e){
        res.send(e.error)
    }
})
module.exports = {courseRouter : courseRouter}