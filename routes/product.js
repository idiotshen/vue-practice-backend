const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const responseHandler = require('../utils/responseHandler')

router.post('/', (req, res) => {
  let param = req.body

  responseHandler(res, productController.createProduct(param))
})

router.get('/', (req, res) => {
  responseHandler(res, productController.getProductList())
})

module.exports = router
