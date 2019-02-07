/* eslint-disable prefer-promise-reject-errors */
const warehouseDao = require('../dao/warehouseDao')

const warehouseOp = {
  async createWarehouse ({ name, location, totalCover }) {
    let warehouse = await warehouseDao.createWarehouse({ name, location, totalCover })

    if (!warehouse) {
      return Promise.reject({ code: 505, message: '新建仓库失败' })
    }

    return Promise.resolve()
  },

  async getWarehouseList () {
    let warehouseList = await warehouseDao.getWarehouseList()

    if (!warehouseList) {
      return Promise.reject({ code: 505, message: '拉取仓库列表失败' })
    }

    return Promise.resolve(warehouseList)
  },

  async updateWarehouseListHasUsed (warehouseId, cover) {
    let warehouse = await warehouseDao.findWarehouseById(warehouseId)

    return warehouseDao.updateWarehouseHasUsed({ warehouseId, hasUsed: warehouse.hasUsed + cover })
  },

  async getWarehouseRest (warehouseId) {
    let warehouse = await warehouseDao.findWarehouseById(warehouseId)

    return warehouse.totalCover - warehouse.hasUsed
  }
}

module.exports = warehouseOp
