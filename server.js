var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var moduleTime = require('./moduleTime');

app.set('views', __dirname + "/views");
app.set("view engine", "ejs")
// app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
	response.send("Hello World")
});

app.get('/time', function(request, response){
	// var time = theTime();
	response.render("time")           
});

http.listen(3000, function(){
	console.log("SERVER 3000")
});

io.on('connection', function(socket){
	setInterval(function(){
	socket.emit('updateTime', { updateTime: moduleTime.theTime() });
	}, 1000);
});











