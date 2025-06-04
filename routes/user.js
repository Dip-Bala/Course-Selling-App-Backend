const { Router } = require("express")
const userRouter = Router()

userRouter.post("/signup", (req, res) => {
    res.json({
        "message": "Signup"
    })
})
userRouter.post("/login", (req, res) => {
    res.json({
        "message": "Signin"
    })
})
userRouter.get("/purchases", (req, res) => {
    res.json({
        "message": "purchase"
    })
})

module.exports = {
    userRouter : userRouter
}