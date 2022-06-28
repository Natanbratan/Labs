const config = require('config')
const app = require('./app')

const port = config.get('server.port') || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
