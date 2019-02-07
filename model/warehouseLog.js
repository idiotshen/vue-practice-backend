const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 仓库操作记录
const warehouseLog = mongoose.model('warehouseLog', new Schema({
  warehouseId: { type: Schema.Types.ObjectId, ref: 'warehouse' },
  product: { type: Schema.Types.ObjectId, ref: 'product' },
  changeCount: Number,
  count: Number, // 变动数量
  createDate: { type: Date, default: Date.now }
}))

module.exports = warehouseLog
