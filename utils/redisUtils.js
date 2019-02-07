const redis = require('redis')
const config = require('config')
const bluebird = require('bluebird')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient({
  host: config.get('redis_host'),
  port: config.get('redis_port')
})

module.exports = {
  set (key, value) {
    client.set(key, value, 'EX', config.get('redis_expire_time'))
  },

  async get (key) {
    return client.getAsync(key)
  }
}
