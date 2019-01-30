const express = require('express')
const router = express.Router()

const responseHandler = require('../utils/responseHandler')

const warehouseBookController = require('../controller/warehouseBookController')

router.post('/', (req, res) => {
  let param = req.body

  responseHandler(res, warehouseBookController.createWarehouseBook(param))
})

module.exports = router
