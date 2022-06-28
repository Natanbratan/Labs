const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const errorCatcher = require('./middlewares/errorCatcher')
const routes = require('./user/router')

const app = new Koa()
const router = new Router()

app.use(cors())
app.use(bodyParser())

app.use(errorCatcher)

router.use(routes.middleware())
app.use(router.middleware())

module.exports = app
