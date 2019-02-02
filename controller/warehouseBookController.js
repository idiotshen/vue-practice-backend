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
  },

  /**
   *
   *
   * @param {Array} updateWarehouseBookList
   * @returns
   */
  async updateWarehouseBookList (updateWarehouseBookList) {
    let changeCover = 0
    let nowWarehouseBookObj = {}
    let warehouseId = updateWarehouseBookList[0].warehouseId
    let warehouseRest = await warehouseOp.getWarehouseRest(warehouseId)
    let nowWarehouseBookList = await warehouseBookOp.getWarehouseBookByWarehouseId(updateWarehouseBookList[0].warehouseId)

    nowWarehouseBookList.forEach(warehouseBook => {
      nowWarehouseBookObj[warehouseBook.product.id] = warehouseBook
    })

    updateWarehouseBookList.forEach(warehouseBook => {
      let nowWarehouseBook = nowWarehouseBookObj[warehouseBook.productId]
      if (!nowWarehouseBook) {
        return Promise.reject({ code: 500, message: '产品不在现有库存中' })
      }

      if (warehouseBook.warehouseId !== nowWarehouseBook.warehouseId.toString()) {
        return Promise.reject({ code: 500, message: '不能同时更新不同仓库库存' })
      }

      changeCover += (warehouseBook.count - nowWarehouseBook.count) * nowWarehouseBook.product.singleCover
    })

    if (changeCover > warehouseRest) {
      return Promise.reject({ code: 500, message: '超出仓库剩余容量' })
    }

    return Promise.all([
      warehouseBookOp.updateWarehouseBookList(updateWarehouseBookList),
      warehouseOp.updateWarehouseListHasUsed(warehouseId, changeCover)
    ])
  }

}

module.exports = warehouseBookController
