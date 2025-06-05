const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String
})

const adminSchema = new Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String
})

const courseSchema = new Schema({
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'admin'  //ref should match the Mongoose model name, not the schema variable

    },
    timestamp: {
        type: Date,
        default : Date.now(),
    },
    title: {
        type: String,
        max: 60
    },
    courseImg:{
        type: String,
    },
    price: Number,
    language: String,
    category: String
})

const purchaseSchema = new Schema({
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const userModel = mongoose.model('user', userSchema )
const adminModel = mongoose.model('admin', adminSchema )
const courseModel = mongoose.model('course', courseSchema )
const purchaseModel = mongoose.model('purchase', purchaseSchema )

module.exports = ({
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
})