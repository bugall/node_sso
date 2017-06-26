import http from 'http'
import Koa from 'koa'
import config from '../config'
const app = new Koa()
app.use(ctx => {
	ctx.body = 'Hello, ServerOne'
})

const server = http.createServer(app.callback())
server.listen(config.serverOne.port)
server.on('listening', () => {
	console.log('Server one Start', `Listen Port:${config.serverOne.port}`)
})

