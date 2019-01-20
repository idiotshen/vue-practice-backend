const dbURL = 'mongodb://localhost/warehouseSystem'
const mongoose = require('mongoose')

module.exports = function (params) {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function () {
    console.log('连接成功')
  })
  mongoose.connect(dbURL)
}
