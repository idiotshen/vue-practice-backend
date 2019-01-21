const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 仓库操作记录
const warehouseLog = mongoose.model('warehouseLog', new Schema({
  uid: String,
  warehouseId: String,
  productId: String,
  count: Number, // 变动数量
  createDate: { type: Date, default: Date.now }
}))

module.exports = warehouseLog
