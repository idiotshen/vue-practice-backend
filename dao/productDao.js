const product = require('../model/product')

const productDao = {
  async findProductById (productId) {
    return product.findOne({
      _id: productId
    })
  },

  async createProduct ({ name, singleCover }) {
    return product.create({
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
