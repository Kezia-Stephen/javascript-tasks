//Seperate special characters from a given string
var str = prompt("Enter a string with special characters");
var specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const resultantString = str.split(specialCharacters);
console.log(resultantString);

//Dynamic implementation
var str = "appl#e$";
var specialCharacters = /[^\w ]/g;
const resultantString = str.replace(specialCharacters, '');
console.log(resultantString);