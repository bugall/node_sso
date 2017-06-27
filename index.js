require('babel-core/register')({
	  presets: ['latest']
})
require('babel-polyfill')
require('./serverOne/app')
require('./serverTwo/app')
require('./ssoService/app')
