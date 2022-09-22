//Write a program to calculate age using js date (This is ok if we consider year alone)
var dob = new Date('1995-08-03');
var year = dob.getFullYear();
var date = new Date();
var currentYear = date.getFullYear();
var age = currentYear - year;
console.log(age);