require('dotenv').config();
const jwt = require('jsonwebtoken')

function userAuth(req, res, next){
    const token = req.headers.token;
    const userId = jwt.verify(token, process.env.USER_SECRET);

    if(userId){
        req.userId = userId;
        next()
    }
    else{
        res.status(403).json({
            "message": "You are not signed in"
        })
    }

}

module.exports = {
    userAuth: userAuth
}