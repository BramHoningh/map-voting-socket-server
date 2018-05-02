const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

io.on('connection', socket => {
  console.log('new connection!')
})

server.listen(port, () => console.log(`Listening on port ${port}`))