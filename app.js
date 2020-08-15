var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.use(express.static('resources'));
 
global.__basedir = __dirname;
 
const db = require('./app/config/db.config.js');
 
db.sequelize.sync({force: true}).then(() => {
  console.log('Ira reiniciar a tabela assim que comecar denovo');
}); 
 
require('./app/routes/coment.route.js')(app);
 
var server = app.listen(8081, function () {
 
var host = server.address().address
var port = server.address().port
 
console.log("App listening at http://%s:%s", host, port)
 
})