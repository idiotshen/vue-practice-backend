const express = require('express')
const router = express.Router()

const responseHandler = require('../utils/responseHandler')

const warehouseBookController = require('../controller/warehouseBookController')

router.post('/', (req, res) => {
  let param = req.body

  responseHandler(res, warehouseBookController.createWarehouseBook(param))
})

router.get('/warehouse/:warehouseId', (req, res) => {
  let { warehouseId } = req.params

  responseHandler(res, warehouseBookController.getWarehouseBookByWarehouseId(warehouseId))
})

module.exports = router
