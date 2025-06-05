const { Router } = require("express")
const { userModel } = require("../db")
const { courseModel } = require("../db")
const { userAuth } = require("../middlewares/middleware.user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const userRouter = Router()


userRouter.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const hashedPassword = await bcrypt.hash(password, 7);
    console.log(hashedPassword);
    try{
        await userModel.create({
            email: email,
            password: hashedPassword,
            first_name: firstName,
            last_name: lastName
        })
        res.status(200).json({
            "message": "Signuped up successfully"
        })
    }catch(e){
        res.send(e);
    }
})
userRouter.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userModel.findOne({
        email: email
    });
    if(!user){
        return res.status(403).json({
            "message": "Email not signed up or incorrect password"
        })
    }
    const match = await bcrypt.compare(password, user.password);
    if(match){
        const token = jwt.sign(user._id.toString(), process.env.USER_SECRET);
        res.status(200).json({
            "token": token
        })
    }
    else{
        res.status(403).json({
            "message": "Incorrect password"
        })
    }
})

userRouter.use(userAuth);

userRouter.get("/purchases", (req, res) => {
    const userId = req.userId;
    try{
        const purchase = purchaseModel.find({userId: userId});
        res.json({ "purchase" : purchase})
    }catch(e){
        res.send(e)
    }
})

module.exports = {
    userRouter : userRouter
}