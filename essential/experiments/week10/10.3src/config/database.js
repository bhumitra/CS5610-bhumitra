// config/database.js
module.exports = {
	'url': process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/test'
	//'url' : 'your-database-here' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

};