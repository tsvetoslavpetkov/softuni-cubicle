const jwt = require('jsonwebtoken')

exports.jwtSign = function (payload, secret) {

    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function (err, token) {
            if (err) {
                reject(err)
            } else {
                resolve(token)
            }
        })
    })

    return promise;
}

exports.jwtVerify = function () {

    let promise = new Promise((resolve, reject) => {
        jwt.verify(token, secret, function (err, payload) {
            if(err){
                reject(err)
            }else{
                resolve(payload)
            }
        })
    })

    return promise;
}