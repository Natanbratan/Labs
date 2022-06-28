require('dotenv').config()

module.exports = {
  db: {
    connectionString: process.env.DB_URL,
  },
  server: {
    port: process.env.PORT,
  },
}
