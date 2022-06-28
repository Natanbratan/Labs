const Router = require('koa-joi-router')

const Validator = require('./validator')
const Controller = require('./container')

const router = new Router()

router.get('/users/:id', Controller.get)
router.post('/users', Validator.signUp, Controller.create)
router.put('/users/:id', Validator.update, Controller.update)
router.get('/prices', Controller.getPrices)

module.exports = router
