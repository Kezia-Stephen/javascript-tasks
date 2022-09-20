//Check if a string is palindrome
function checkPalindrome(string) {

    
    const len = string.length;

   
    for (let i = 0; i < len / 2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const string = prompt('Enter a string: ');


const value = checkPalindrome(string);

console.log(value);

//Alternate way
 var a= prompt("Enter a string");  
        var b = "";  
        for (i = a.length-1; i >= 0; i--)  
        {  
        b = b + a[i]  
        }  
//console.log(b);
if(a==b){
    console.log("It is a palindrome");
}
else{
    console.log("It is not a palindrome");
}

//Alternate way with length variable
 var a= prompt("Enter a string");  
var len = a.length;
        var b = "";  
        for (i = len-1; i >= 0; i--)  
        {  
        b = b + a[i]  
        }  
//console.log(b);
if(a==b){
    console.log("It is a palindrome");
}
else{
    console.log("It is not a palindrome");
}
