const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())

app.post("/user/signup", (req, res) => {

})
app.post("/user/login", (req, res) => {
    
})
app.post("/course/purchase", (req, res) => {
    
})
app.get("/user/courses", (req, res) => {
    
})
app.get("/user/purchases", (req, res) => {
    
})

app.listen(3000)