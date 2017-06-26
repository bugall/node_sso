require('babel-core/register')({
	  presets: ['es2015'],
})
require('babel-polyfill')
require('./serverOne/app')
require('./serverTwo/app')
require('./ssoService/app')
