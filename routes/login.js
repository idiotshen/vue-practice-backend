const express = require('express')
const router = express.Router()
const loginController = require('../controller/loginController')
const responseHandler = require('../utils/responseHandler')

router.post('/', (req, res) => {
  let param = req.body
  let ip = req.ip
  responseHandler(res, loginController.auth(param, ip))
})

module.exports = router
