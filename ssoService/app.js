import http from 'http'
import Koa from 'koa'
import config from '../config'
const app = new Koa()
app.use(ctx => {
	ctx.body = 'Hello, ServerTwo'
})

console.log(config.ssoService)
const server = http.createServer(app.callback())
server.listen(config.ssoService.port)
server.on('listening', () => {
	console.log('SSo server one Start', `Listen Port:${config.ssoService.port}`)
})

