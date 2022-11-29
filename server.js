const http = require('http')
const router = require('./router')
const port = process.env.port || 4000
const app = function (req, res) {
  router(req, res)
}
http.createServer(app).listen(port)
console.log('server listening on port', port)
