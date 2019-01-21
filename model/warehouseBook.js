const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 在库物品记录
const warehouseBook = mongoose.model('warehouseLog', new Schema({
  uid: String,
  warehouseId: String,
  productId: String,
  count: Number,
  createDate: { type: Date, default: Date.now }
}))

module.exports = warehouseBook
