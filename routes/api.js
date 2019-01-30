const express = require('express')
const router = express.Router()

const login = require('./login')
const warehouse = require('./warehouse')
const product = require('./product')
const warehouseBook = require('./warehouseBook')

router.use('/login', login)
router.use('/warehouse', warehouse)
router.use('/product', product)
router.use('/warehouseBook', warehouseBook)

module.exports = router
