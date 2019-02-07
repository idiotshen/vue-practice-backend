var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const init = require('./init')
const bodyParser = require('body-parser')
const jwtFilter = require('./filter/jwtFilter')

var api = require('./routes/api')

var app = express()

init()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'TRUE')
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')))

app.use(jwtFilter)
app.use(api)

app.listen(8081)

module.exports = app
