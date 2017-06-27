import http from 'http'
import Koa from 'koa'
import config from '../config'
const app = new Koa()
import staticFile from '../util/static'

app.use(staticFile(__dirname))
app.use(async (ctx, next) => {})

const server = http.createServer(app.callback())
server.listen(config.serverOne.port)
server.on('listening', () => {
	console.log('Server one Start', `Listen Port:${config.serverOne.port}`)
})
