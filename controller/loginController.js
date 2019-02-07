const loginOp = require('../operation/loginOp')
const redisUtil = require('../utils/redisUtils')

const loginController = {
  async auth ({ username, password }, ip) {
    const jwt = await loginOp.auth({ username, password })

    redisUtil.set(username, JSON.stringify({ jwt, ip }))

    return jwt
  }
}

module.exports = loginController
