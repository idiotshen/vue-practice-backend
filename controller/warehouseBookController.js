const warehouseBookOp = require('../operation/warehouseBookOp')
const warehouseOp = require('../operation/warehouseOp')
const productOp = require('../operation/productOp')
const db = require('mongoose')

const warehouseBookController = {
  async createWarehouseBook ({ warehouseId, productId, count }) {
    let product = await productOp.getProduct(productId)
    if (!product) {
      return Promise.reject({ code: 500, message: '产品不存在' })
    }

    let warehouseRest = await warehouseOp.getWarehouseRest(warehouseId)
    if (!warehouseRest) {
      return Promise.reject({ code: 500, message: '仓库不存在' })
    }

    let cover = product.singleCover * count
    if (warehouseRest < cover) {
      return Promise.reject({ code: 500, message: '超出容量上限' })
    }

    let promiseArr = [warehouseOp.updateWarehouseListHasUsed(warehouseId, cover), warehouseBookOp.createWarehouseBook({ warehouseId, productId, count, cover })]
    return Promise.resolve()
      .then(() => {
        return db.startSession()
      })
      .then((session) => {
        session.startTransaction()
        return Promise.all(promiseArr)
      })
  },

  async getWarehouseBookByWarehouseId (warehouseId) {
    let warehouseBookList = await warehouseBookOp.getWarehouseBookByWarehouseId(warehouseId)

    return warehouseBookList
  }

}

module.exports = warehouseBookController
