const warehouseBook = require('../model/warehouseBook')
const uuid = require('uuid')

const warehouseBookDao = {
  getWarehouseBookByWarehouseId (warehouseId) {
    return warehouseBook.find({
      warehouseId
    }).exec()
  },

  getWarehouseBookByProductId (productId) {
    return warehouseBook.find({
      productId
    }).exec()
  },

  createWarehouseBook ({ warehouseId, productId, count, cover }) {
    return warehouseBook.create({
      uid: uuid.v4(),
      warehouseId,
      productId,
      count,
      cover
    })
  }
}

module.exports = warehouseBookDao
