const jwt = require('jsonwebtoken')
const config = require('config')

const jwtUtil = {
  encrypt (obj) {
    return jwt.sign(obj, config.get('secret'), { expiresIn: 60 * 30 })
  },

  verify (token) {
    return jwt.verify(token, config.get('secret'))
  }
}

module.exports = jwtUtil
