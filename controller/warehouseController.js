const warehouseOp = require('../operation/warehouseOp')
const warehouseBookOp = require('../operation/warehouseBookOp')
const productOp = require('../operation/productOp')

const warehouseController = {
  async createWarehouse ({ name, location, totalCover }) {
    return warehouseOp.createWarehouse({ name, location, totalCover })
  },

  async getWarehouseList () {
    return warehouseOp.getWarehouseList()
  },

  async getWarehouseExcludedProductList (warehouseId) {
    let warehouseBookList = await warehouseBookOp.getWarehouseBookByWarehouseId(warehouseId)
    let productIdList = warehouseBookList.map((value) => value.productId)

    return productOp.getProductByCondition({
      uid: {
        $nin: productIdList
      }
    })
  }
}

module.exports = warehouseController
