//Given an array of numbers, write a program that prints nearest larger value of each index position

function printNGE(arr, n)
      {
        var next, i, j;
        for (i = 0; i < n; i++)
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (arr[i] < arr[j])
            {
              next = arr[j];
              break;
            }
          }
          console.log(arr[i] + " -- " + next);
          //document.write("<br>");
        }
      }
 

      var arr = [10, 5, 11, 10, 12, 20];
      var n = arr.length;
      printNGE(arr, n);
	  
	  
//Sort first

var arr = [10,5,11,10,20,12];
var sorted = arr.sort(function(a,b){
	return a-b;
});
console.log(sorted);

var n = sorted.length;
printNearestLarger(sorted,n);


function printNearestLarger(array,n)
{
	var next, i, j;
        for (i = 0; i < n; i++)
        {
          next = -1;
          for (j = i + 1; j < n; j++)
          {
            if (array[i] < array[j])
            {
              next = array[j];
              break;
            }
          }
          console.log(array[i] + " -- " + next);
          //document.write("<br>");
        }
}
