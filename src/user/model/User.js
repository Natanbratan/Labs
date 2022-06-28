class User {
  constructor(db) {
    this.login = db.login
    this.name = db.name
    this.password = db.password
  }

  get() {
    return {
      login: this.login,
      name: this.name,
    }
  }
}

module.exports = { User }
