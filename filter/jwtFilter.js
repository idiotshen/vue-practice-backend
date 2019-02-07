const jwtUtils = require('../utils/jwtUtil')
const redisUtils = require('../utils/redisUtils')

const EXCLUDE_ROUTER = ['/login', '/error']
const EXCLUDE_METHOD = ['OPTIONS']

module.exports = async function (req, res, next) {
  if (EXCLUDE_METHOD.includes(req.method) || EXCLUDE_ROUTER.includes(req.originalUrl) || EXCLUDE_ROUTER.includes(req.baseUrl) || EXCLUDE_ROUTER.includes(req.path)) {
    next()
  } else {
    let token = req.get('token')

    try {
      let tokenObj = jwtUtils.verify(token)
      let val = await redisUtils.get(tokenObj.username)
      val = JSON.parse(val)
      if (val.ip !== req.ip) {
        throw new Error('与上次登陆地点不同')
      }
      next()
    } catch (e) {
      res.json({
        code: 403
      })
    }
  }
}
