const express = require('express')
const router = express.Router()
const login = require('./login')
const warehouse = require('./warehouse')

router.use('/login', login)
router.use('/warehouse', warehouse)

module.exports = router
