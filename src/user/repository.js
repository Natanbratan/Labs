class Repository {
  constructor(db) {
    this.db = db
  }

  create({ login, password, name }) {
    return this.db.query(`
    INSERT INTO users 
    (login, password, name)
    VALUES ('${login}', '${password}', '${name}')
    RETURNING *
  `)
  }

  get(id) {
    return this.db.query(`
      SELECT *
      FROM users
      WHERE id = ${id}
    `)
  }

  update({ login, name, id }) {
    return this.db.query(`
      UPDATE users
      SET login = '${login}',
      name = '${name}'
      WHERE id = ${id}
    `)
  }
}

module.exports = { Repository }
