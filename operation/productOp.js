/* eslint-disable prefer-promise-reject-errors */
const productDao = require('../dao/productDao')

const productOp = {
  async createProduct ({ name, singleCover }) {
    let product = await productDao.createProduct({ name, singleCover })

    if (!product) {
      return Promise.reject({ code: 500, message: '新建产品失败' })
    }

    return Promise.resolve()
  },

  async getProductList () {
    let productList = await productDao.getProductList()

    if (!productList) {
      return Promise.reject({ code: 500, message: '拉取产品列表失败' })
    }

    return Promise.resolve(productList)
  },

  async getProduct (productId) {
    let product = await productDao.findProductById(productId)

    return product
  },

  async getProductByCondition (condition) {
    return productDao.getProductListByCondition(condition)
  }
}

module.exports = productOp
