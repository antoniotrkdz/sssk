const http = require('http')
const port = process.env.port || 4000
const headers = {
  'content-type': 'text/html'
}
const handlers = {}

handlers.home = function (req, res) {
  res.writeHead(200, headers)
  res.end('Hello world')
  // res.end(data.greeting)
}

handlers.notFound = function (req, res) {
  res.writeHead(404, headers)
  res.end('Resource not found')
}

const routes = {
  '/': handlers.home,
  404: handlers.notFound
}

const router = function (req, res) {
  if (routes[req.url]) {
    routes[req.url](req, res)
  } else {
    routes[404](req, res)
  }
}

const app = function (req, res) {
  router(req, res)
}
http.createServer(app).listen(port)
console.log('server listening on port', port)
