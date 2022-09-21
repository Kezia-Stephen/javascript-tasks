//Print the day of the date
var givenDate = new Date('2021-06-09');
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = givenDate.getDay();
if ((day === 6)||(day === 0)){
	console.log(week[day] + '- This is Weekend');
	}
else{
	console.log(week[day]+ '- This is Working day');
	}