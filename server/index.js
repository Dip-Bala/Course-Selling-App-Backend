const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const {userRouter} = require("./routes/route.user")
const {courseRouter} = require("./routes/route.course")
const {adminRouter} = require("./routes/route.admin")
require('dotenv').config(); //import .env after installing 
const app = express();

app.use(express.json()) 
app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/admin', adminRouter)

async function main(){
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () => {
        console.log(`The server is running on port ${process.env.PORT}`)
    })
}
main()