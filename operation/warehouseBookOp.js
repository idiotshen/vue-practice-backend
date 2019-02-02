const warehouseBookDao = require('../dao/warehouseBookDao')

const warehouseBookOp = {
  async createWarehouseBook ({ warehouseId, productId, count, cover }) {
    return warehouseBookDao.createWarehouseBook({ warehouseId, productId, count, cover })
  },

  async getWarehouseBookByWarehouseId (warehouseId) {
    return warehouseBookDao.getWarehouseBookByWarehouseId(warehouseId)
  },

  async updateWarehouseBookList (updateWarehouseBookList) {
    let promiseArr = []

    updateWarehouseBookList.forEach(element => {
      promiseArr.push(warehouseBookDao.updateWarehouseBookCount(
        {
          count: element.count,
          cover: element.cover
        }, {
          warehouseId: element.warehouseId,
          productId: element.productId
        }))
    })

    return Promise.all(promiseArr)
  }
}

module.exports = warehouseBookOp
