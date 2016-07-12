module.exports = {

  theTime: function (){
    var time = new Date
    var hour = addZero(time.getHours());
    var minutes = addZero(time.getMinutes());
    var seconds = addZero(time.getSeconds());
    var colorval = "#" + hour + minutes + seconds;
    var timeval = hour +':'+ minutes + ':'+seconds;
    var json = JSON.stringify({"color":colorval,"time":timeval});
    return json
  }

};

function addZero(digit){
  if(digit < 10) return "0" + digit
    return digit;
}
