const { Pool } = require('pg')
const conf = require('config')

class Database {
  constructor(config) {
    this.pool = new Pool(config)
  }

  query(query) {
    return this.pool.query(query)
  }
}

module.exports = new Database({ connectionString: conf.get('db.connectionString') })
