const warehouse = require('../model/warehouse')
const uuid = require('uuid')

const warehouseDao = {
  async findWarehouseById ({
    warehouseId
  }) {
    return warehouse.findOne({
      uid: warehouseId
    })
  },

  async updateWarehouseHasUsed ({
    warehouseId,
    hasUsed
  }) {
    return warehouse.updateOne({
      uid: warehouseId
    }, {
      hasUsed
    })
  },

  async updateWarehouseTotalCover ({
    warehouseId,
    totalCover
  }) {
    return warehouse.updateOne({
      uid: warehouseId
    }, {
      totalCover
    })
  },

  async createWarehouse ({ name, location, totalCover }) {
    return warehouse.create({
      uid: uuid.v4(),
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
