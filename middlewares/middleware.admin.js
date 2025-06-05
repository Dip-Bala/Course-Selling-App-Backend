require('dotenv').config();
const jwt = require('jsonwebtoken')


function adminAuth(req, res, next){
    const token = req.headers.token;
    const admin = jwt.verify(token, process.env.ADMIN_SECRET);
    if(admin){
        req.adminId = admin.adminId;
        next()
    }
    else{
        res.status(403).json({
            "message": "You are not signed in"
        })
    }

}


module.exports = {
    adminAuth: adminAuth
}