const express = require('express')
const router = express.Router()
const warehouseController = require('../controller/warehouseController')
const responseHandler = require('../utils/responseHandler')

router.post('/', (req, res) => {
  let param = req.body

  responseHandler(res, warehouseController.createWarehouse(param))
})

router.get('/', (req, res) => {
  let param = req.body

  responseHandler(res, warehouseController.getWarehouseList(param))
})

router.get('/:warehouseId/excludedProductList', (req, res) => {
  let { warehouseId } = req.params

  responseHandler(res, warehouseController.getWarehouseExcludedProductList(warehouseId))
})

module.exports = router
