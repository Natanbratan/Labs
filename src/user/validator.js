const Router = require('koa-joi-router')

const joi = Router.Joi

exports.signUp = {
  validate: {
    type: 'json',
    body: {
      login: joi.string().min(3).max(20).required(),
      password: joi.string().min(6).max(20).required(),
      name: joi.string().max(20).required(),
    },
  },
}

exports.update = {
  validate: {
    type: 'json',
    body: {
      login: joi.string().min(3).max(20).required(),
      name: joi.string().max(20).required(),
    },
  },
}
