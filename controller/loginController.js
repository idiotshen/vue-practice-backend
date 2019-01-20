const loginOp = require('../operation/loginOp')

const loginController = {
  async auth ({ username, password }) {
    return loginOp.auth({ username, password })
  }
}

module.exports = loginController
