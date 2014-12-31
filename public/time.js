var socket = io.connect('/');

socket.on('updateTime', function(data){
  $('h1').text(data.updateTime);
  $('body').css("background", data.updateTime);
});
