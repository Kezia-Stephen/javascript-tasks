//Write a program that prints the numbers from 1 through 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i=1; i<=100; i++){
	if ((i%3==0)&&(i%5==0)){
		console.log("FizzBuzz");
	}
	else if (i%3==0){
		console.log("Fizz");
	}
	else if (i%5==0){
		console.log("Buzz");
	}
	else{
		console.log(i);
	}
}

//Find a value which is nearest to 100 from two different given integer values

var num1 = parseInt(prompt("Enter a integer"));
var num2 = parseInt(prompt("Enter another integer"));
var diff1 = 100-num1;//98->2
var diff2 = 100-num2;//99->1
if (diff1<diff2){
	console.log("First integer entered is closer to 100");
}
else{
	console.log("Second integer entered is closer to 100");
}

