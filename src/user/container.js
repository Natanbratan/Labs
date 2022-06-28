const { Controller } = require('./controller')
const { Service } = require('./service')
const { Bcrypt } = require('../bcrypt/bcrypt')
const { Repository } = require('./repository')
const { CoinGecko } = require('../coingecko/coingecko')
const db = require('../database/db')

const repository = new Repository(db)
const bcrypt = new Bcrypt()
const coinGecko = new CoinGecko()
const service = new Service(bcrypt, repository, coinGecko)
const controller = new Controller(service)

module.exports = controller
