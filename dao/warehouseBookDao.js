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
      product: productId,
      count,
      cover
    })
  },

  updateWarehouseBookCount ({ count, cover }, { warehouseId, productId }) {
    return warehouseBook.updateOne({
      warehouseId,
      product: productId
    }, {
      count,
      cover
    })
  }
}

module.exports = warehouseBookDao
