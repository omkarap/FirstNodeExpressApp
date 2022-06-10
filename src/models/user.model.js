var dbConn = require('../../config/db.config');

const getUserDetailModel = (userId) => {
    return new Promise((resolve,reject) => {
        dbConn.query("Select * from users where id="+`"${userId}"`, function(error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
}

module.exports = {
    getUserDetailModel
}