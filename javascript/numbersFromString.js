//Removing numbers from a given string
var str = "apple1234is56tasty89";
var num = /\d+/g;
var result = str.match(num);
console.log(result);

//printing if the number is even or odd
var len = result.length;
for (let i=0; i<len; i++){
	if (result[i]%2 == 0){
		console.log(result[i] + " is an even number");
	}
	else{
		console.log(result[i] + " is an odd number");
	}
}

//entries, copy within, fill, flat, flatmap, values, isArray

