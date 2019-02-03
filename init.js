const mongoose = require('mongoose')
const config = require('config')

module.exports = function (params) {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function () {
    console.log('连接成功')
  })
  console.log(process.env.NODE_ENV)
  mongoose.connect(config.get('db_uri'), {
    user: config.get('user'),
    pass: config.get('pwd')
  })
}
