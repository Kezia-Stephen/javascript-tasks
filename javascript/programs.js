var str = "Hello";
console.log(str.length);

var str = "Helloppphgsdyasd";
console(str.slice(3,9)));

//print numbers in words in reverse order
var number = parseInt(prompt("Enter the number to reverse"));
        var reverse = 0;
		var word;
        while(number>0){
            var mod = number%10;
			numinword(mod);
            reverse = reverse*10+mod;
			number = parseInt(number/10);
        }
		
function numinword(mod){
	switch(mod){
	
	case 0:
		console.log("zero");
		break;
	case 1:
		console.log("one");
		break;
	case 2:
		console.log("two");
		break;
	case 3:
		console.log("three");
		break;
	case 4:
		console.log("four");
		break;
		}
	}
		
Write a program to generate random background color