import { readFile } from './file'
import config from '../config'

export default function staticFile(local) {
  if (typeof local != "string") {
    throw new Error("local must string")
  }

  const project = local.split('/')[local.split('/').length - 1]
  const filter = config.staticFilter[project]
  const basePath = __dirname + '/../'

  async function process(ctx, next) {
    if (ctx.path === '/') {
      ctx.body = await readFile(`${basePath}${project}/index.html`)
    }

    console.log(ctx.path, 'path@@@@')
    return
  }

  return process
}
