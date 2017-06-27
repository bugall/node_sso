import fs from 'fs'

const readFile = (path) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path,'utf-8', (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
  })
}
export { readFile }
