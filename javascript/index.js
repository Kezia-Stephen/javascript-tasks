var age = prompt("Please enter your age");
if (age>18 && age<60){
    if(age>25 && age<60){
        console.log("Adult");
    }
    console.log("Major");
}
else if (age>60){
    console.log("Senior Citizen");
}
else{
    console.log("Minor");
}


var color = prompt("What's your favorite color?");
switch(color){
    case "green":
        console.log("Green is a good color");
        break;
    case "red":
        console.log("Red is a bold color");
        break;
    case "blue":
        console.log("Blue is a tranquil color");
        break;
    case "yellow":
        console.log("Yellow is a bright color");
        break;
    default:
        console.log("This is a good option too!");
    }