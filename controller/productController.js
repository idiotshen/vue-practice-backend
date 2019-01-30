/* eslint-disable prefer-promise-reject-errors */
const productOp = require('../operation/productOp')

const productController = {
  async createProduct ({ name, singleCover }) {
    if (!name || !singleCover) {
      return Promise.reject({ code: 500, message: '缺少必要参数' })
    }

    return productOp.createProduct({ name, singleCover })
  },

  async getProductList () {
    return productOp.getProductList()
  }

}

module.exports = productController
