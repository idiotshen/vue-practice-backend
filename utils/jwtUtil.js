const jwt = require('jsonwebtoken')

const secret = 'idiot_shen'

const jwtUtil = {
  encrypt (obj) {
    return jwt.sign(obj, secret, { expiresIn: 60 * 30 })
  }
}

module.exports = jwtUtil
