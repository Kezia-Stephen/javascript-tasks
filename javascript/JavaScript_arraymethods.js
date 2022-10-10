//flatMap
var arr = [1,2,[3,4,5]];
var flatMap = arr.flatMap((num) =>x);
console.log(flatMap);

//filter
var num = [1,2,3,4,5];
var res = num.filter(checkNum);

function checkNum(num){
	return num<=2;
}

//forEach
var arr = [1,2,3,4,5];
arr.forEach(func);

function func(i, idx, arr){
	arr[idx] = i+2;
}

//keys
var arr = ["apple", "ball", "cat"];
var keys = arr.keys();

for (let i of keys){
	i;
}

//findLast
var arr = [10,20,30,40,50];
arr.findLast(checkNum);

function checkNum(number){
	return number>=30;
}

//map
var arr = [1,2,3,4,5];
var result = arr.map(multiplyNum);

function multiplyNum(arr){
	return num*5;
}

//reduce
var arr = [1,2,3,4,5];
var result = arr.reduce(addNum);

function addNum(total, arr){
	return total+arr;
}

//push and pop
var arr = ["apple", "ball", "cat"];
var push = arr.push("dog");
console.log(push);
arr.pop();

//sort
var arr = ["dog", "apple", "cat", "ball"];
var sort = arr.sort();
console.log(arr);

//reduceRight
var arr = [1,2,5];
var result = arr.reduceRight(subtractNum);

function subtractNum(total, arr){
	return total-arr;
}

//shift
var arr = ["apple", "ball", "cat", "dog"];
arr.shift();
console.log(arr);

//toString
var arr = ["apple", "ball", "cat", "dog"];
var str = arr.toString();
console.log(str);

//some
var arr = [1,2,3,4,5];
arr.some(checkNum);

function checkNum(arr){
	return arr>3;
}