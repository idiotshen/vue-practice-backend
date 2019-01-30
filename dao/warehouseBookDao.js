const warehouseBook = require('../model/warehouseBook')

const warehouseBookDao = {
  getWarehouseBookByWarehouseId (warehouseId) {
    return warehouseBook.find({
      warehouseId
    })
      .populate('product')
      .exec()
  },

  getWarehouseBookByProductId (productId) {
    return warehouseBook.find({
      productId
    }).exec()
  },

  createWarehouseBook ({ warehouseId, productId, count, cover }) {
    return warehouseBook.create({
      warehouseId,
      productId,
      count,
      cover
    })
  }
}

module.exports = warehouseBookDao
