const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 在库物品记录
const warehouseBook = mongoose.model('warehouseBook', new Schema({
  warehouseId: { type: Schema.Types.ObjectId, ref: 'warehouse' },
  product: { type: Schema.Types.ObjectId, ref: 'product' },
  count: Number,
  cover: Number,
  createDate: { type: Date, default: Date.now }
}))

module.exports = warehouseBook
