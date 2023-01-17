/*
function fibonacci(num)
{
	var num1=0;
	var num2=1;
	var sum;
	var i=0;
	for (i = 0; i < num; i++)
	{
		sum=num1+num2;
		num1=num2;
		num2=sum;
	}
	return num2;
}

console.log(fibonacci(10));*/

/*(2)--------------------

function fibonacci(num)
	{
		if(num==1)
			return 0;
		if (num == 2)
			return 1;
		return fibonacci(num - 1) + fibonacci(num - 2);
	}
console.log(fibonacci(10));*/
 
/*(3)---------------------

	const n = 10;
	
	// Create a new array of size 'n'
	var series = new Array(n);

	// Fills all places in array with 0
	series.fill(0);
	
	// Seed value for 1st element
	series[0] = 0;
	
	// Seed value for 2nd element
	series[1] = 1;
	
	for(let i = 2; i < n; i++) {

		// Apply basic Fibonacci formulae
		series[i] = series[i-1] + series[i-2];
	}

	// Print the series
	console.log(series);*/

/*(4)-----------------

	function fibonacci(n){
	if(n == 1) return 0; // Return value for n=1
	if(n == 2) return 1; // Return value for n=2
	
	// Recursive call
	return fibonacci(n-1) + fibonacci(n-2);
	}
	
	const n = 10;
	
	// Create a new array of size 'n'
	var series = new Array(n);

	// Fills all places in array with 0
	series.fill(0);
	
	for(let i = 1; i <= n; i++) {

		// Store i-th Fibonacci number
		series[i-1] = fibonacci(i);
	}

	// Print the series
	console.log(series);*/


/*(1)--------------
// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
//const year = prompt('Enter a year:');

checkLeapYear(2008);*/

/* largest number----------
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);
*/
