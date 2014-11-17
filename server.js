var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var moduleTime = require('./moduleTime');
var expressLayouts = require('express-ejs-layouts');

app.set('views', __dirname + "/views");
app.set("view engine", "ejs")
app.use(expressLayouts);
app.use(require('express').static(__dirname + '/public'));
app.set('layout', 'time')


app.get('/', function(request, response){
	response.render("time")
});

app.set('port', (process.env.PORT || 3000))

module.exports = http
if (!module.parent) {
  console.log('Server running on port 3000')
  http.listen(app.get('port'), function () {
    console.log("Node app is running at port:" + app.get('port'))
  });
};

io.on('connection', function(socket){
	setInterval(function(){
	socket.emit('updateTime', { updateTime: moduleTime.theTime() });
	}, 1000);
});











