const warehouseBookDao = require('../dao/warehouseBookDao')

const warehouseBookOp = {
  async createWarehouseBook ({ warehouseId, productId, count, cover }) {
    return warehouseBookDao.createWarehouseBook({ warehouseId, productId, count, cover })
  },

  async getWarehouseBookByWarehouseId (warehouseId) {
    return warehouseBookDao.getWarehouseBookByWarehouseId(warehouseId)
  }
}

module.exports = warehouseBookOp
