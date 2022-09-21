//Write a program to check whether a date is a weekend date or not
var givenDate = new Date('2021-11-05');
var day = givenDate.getDay();
if ((day === 6)||(day === 0)){
	document.write('This is Weekend');
	}
else{
	document.write('This is Working day');
	}

//Using Ternary Operator
var givenDate = new Date('2021-11-05');
var day = givenDate.getDay();
var isWeekend = (day === 6) || (day === 0) ? 'This is Weekend': 'This is Working Day';
document.write(isWeekend);