const product = require('../model/product')
const uuid = require('uuid')

const productDao = {
  async findProductById (productId) {
    return product.findOne({
      uid: productId
    })
  },

  async createProduct ({ name, singleCover }) {
    return product.create({
      uid: uuid.v4(),
      name,
      singleCover
    })
  },

  async getProductList () {
    return product.find().exec()
  },

  async getProductListByCondition (condition) {
    return product.find(condition).exec()
  }
}

module.exports = productDao
