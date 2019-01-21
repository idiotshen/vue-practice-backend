const user = require('../model/user')

const userDao = {
  async findUser ({ username, password }) {
    return user.findOne({
      username,
      password
    })
  }
}

module.exports = userDao
