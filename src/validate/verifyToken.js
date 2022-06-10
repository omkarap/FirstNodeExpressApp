const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    console.log('Verify called')
    const user_token = req.header('Authorization');
    console.log("========>> Token ==> : ", user_token);
    try {
        if(!user_token) {
            res.status(401).send({ 
                success:false, 
                message: 'Access denied due to absence of token',
                error_code: '401'
               });
        }else{
            const verified = jwt.verify(user_token, process.env.JWT_SECRET_KEY);
            req.user = verified;
            next();
        }
    } catch (error) {
        console.log("CURRENT ERROR",error.expiredAt)
        if(error.expiredAt){
            return res.status(401).send(errorObj={ 
                success:false, 
                message: "Session Expired",
                error_code: "EXP"
            });
        }else{
            res.status(400).send({ 
                success:false, 
                message: 'Invalid user',
                error_code: '400'
            });
        }
    }
}