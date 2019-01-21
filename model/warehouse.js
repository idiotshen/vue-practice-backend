const mongoose = require('mongoose')
const Schema = mongoose.Schema

const warehouse = mongoose.model('warehouse', new Schema({
  uid: String,
  name: String,
  location: String,
  totalCover: Number,
  hasUsed: { type: Number, default: 0 },
  createDate: { type: Date, default: Date.now }
}))

module.exports = warehouse
