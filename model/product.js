const mongoose = require('mongoose')
const Schema = mongoose.Schema

const product = mongoose.model('product', new Schema({
  uid: String,
  name: String,
  singleTotal: Number,
  createDate: { type: Date, default: Date.now }
}))

module.exports = product
