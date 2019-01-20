const user = require('../model/User')

const userDao = {
  async findUser ({ username, password }) {
    return user.findOne({
      username,
      password
    })
  }
}

module.exports = userDao
