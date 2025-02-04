const handlers = module.exports = {}
const data = require('./model')

const headers = {
  'content-type': 'text/html'
}

handlers.home = function (req, res) {
  res.writeHead(200, headers)
  res.end(data.greeting)
}

handlers.notFound = function (req, res) {
  res.writeHead(404, headers)
  res.end('Resource not found')
}
