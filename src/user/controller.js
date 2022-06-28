const { Service } = require('./service')

class Controller {
  constructor(service) {
    this.service = service
  }

  get = async (ctx) => {
    const { id } = ctx.request.params
    const res = await this.service.get(id)
    ctx.status = 200 // OK
    ctx.body = res
  }

  create = async (ctx) => {
    try {
      const body = ctx.request.body
      const userId = await this.service.create(body)
      ctx.body = userId
      ctx.status = 201 // Created
    } catch (err) {
      ctx.status = 400 // Bad request
      throw err
    }
  }

  update = async (ctx) => {
    const body = ctx.request.body
    const { id } = ctx.request.params
    await this.service.update({ ...body, id })
    ctx.status = 200
  }

  getPrices = async (ctx) => {
    const response = await this.service.getPrices()
    ctx.body = response
    ctx.status = 200
  }
}

module.exports = { Controller }
