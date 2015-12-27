var url=window.location.host + '/';

var socket = io.connect(url);

socket.on('updateTime', function(data){
  var obj = eval ('(' + data.updateTime + ')');
  $('h1').text(obj.time);
  $('h1').css("background-color", obj.color);
});
