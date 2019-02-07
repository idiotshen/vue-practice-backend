/* eslint-disable prefer-promise-reject-errors */
const userDao = require('../dao/userDao')
const jwtUtil = require('../utils/jwtUtil')

const loginOp = {
  async auth ({ username, password }) {
    let user = await userDao.findUser({ username, password })

    if (!user) {
      return Promise.reject({ code: 500, message: '用户名或密码错误' })
    }

    return jwtUtil.encrypt({ _id: user._id, username: user.username })
  }
}

module.exports = loginOp
