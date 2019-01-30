const warehouse = require('../model/warehouse')

const warehouseDao = {
  async findWarehouseById (warehouseId) {
    return warehouse.findOne({
      _id: warehouseId
    })
  },

  async updateWarehouseHasUsed ({
    warehouseId,
    hasUsed
  }) {
    return warehouse.updateOne({
      _id: warehouseId
    }, {
      hasUsed
    })
  },

  async updateWarehouseTotalCover ({
    warehouseId,
    totalCover
  }) {
    return warehouse.updateOne({
      _id: warehouseId
    }, {
      totalCover
    })
  },

  async createWarehouse ({ name, location, totalCover }) {
    return warehouse.create({
      name,
      location,
      totalCover
    })
  },

  async getWarehouseList () {
    return warehouse.find().exec()
  }
}

module.exports = warehouseDao
