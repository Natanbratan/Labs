const { User } = require('./model/User')

class Service {
  constructor(bcrypt, repository, coinGecko) {
    this.bcrypt = bcrypt
    this.repository = repository
    this.coinGecko = coinGecko
  }

  async create(dto) {
    const hashPassword = await this.bcrypt.hash(dto.password)
    const res = await this.repository.create({ ...dto, password: hashPassword })
    return res.rows[0].id
  }

  async get(id) {
    const res = await this.repository.get(id)
    return new User(res.rows[0]).get()
  }

  async update(dto) {
    await this.repository.update(dto)
  }

  async getPrices() {
    return this.coinGecko.getPrices()
  }
}

module.exports = { Service }
