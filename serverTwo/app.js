import http from 'http'
import Koa from 'koa'
import config from '../config'
const app = new Koa()
app.use(ctx => {
	ctx.body = 'Hello, ServerTwo'
})

const server = http.createServer(app.callback())
server.listen(config.serverTwo.port)
server.on('listening', () => {
	console.log('Server one Start', `Listen Port:${config.serverTwo.port}`)
})

