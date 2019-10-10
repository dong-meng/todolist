const jwt = require('jsonwebtoken');

const screat = 'qwer'
module.exports = {
    createToken(payload, expires) {
        let token = jwt.sign(payload, screat, { expiresIn: expires })
            //screat 秘鑰   payload 秘鑰裡面含有的一些東西 
        return token
    },
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, screat, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}