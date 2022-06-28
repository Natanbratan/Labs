const bcrypt = require('bcrypt')

class Bcrypt {
  hash(password) {
    return bcrypt.hash(password, 10)
  }

  compare(password, hashPassword) {
    return bcrypt.compare(password, hashPassword)
  }
}

module.exports = { Bcrypt }
