const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = mongoose.model('user', new Schema({
  uid: String,
  name: String,
  username: String,
  password: String,
  createDate: { type: Date, default: Date.now }
}))

module.exports = user
