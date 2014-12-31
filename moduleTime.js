module.exports = {

	theTime: function (){
		var time = new Date
		var hour = addZero(time.getHours());
		var minutes = addZero(time.getMinutes());
		var seconds = addZero(time.getSeconds());
		return "rgb(" + hour + ", " + minutes + ", " + seconds + ")"
	}

};

function addZero(digit){
	if(digit < 10) return "0" + digit
		return digit;
}
