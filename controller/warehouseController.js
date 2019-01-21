const warehouseOp = require('../operation/warehouseOp')

const warehouseController = {
  async createWarehouse ({ name, location, totalCover }) {
    return warehouseOp.createWarehouse({ name, location, totalCover })
  },

  async getWarehouseList () {
    return warehouseOp.getWarehouseList()
  }
}

module.exports = warehouseController
