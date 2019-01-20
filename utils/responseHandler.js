module.exports = function (res, promise) {
  promise.then((result) => {
    res.json({
      code: 200,
      result
    })
  })
    .catch((err) => {
      res.json({
        code: err.code || '504',
        msg: err.message || ''
      })
    })
}
