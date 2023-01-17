/*var taka=[2,3,4,5,7,8,56,9];
var squareNumber=taka.map(function(t){
    return (t*t);
})
console.log(squareNumber);*/


/*var price=[2,3,4,4,5,7,8,9];
var squareNumber=price.map(function(x){
    return(x*x);
}); console.log( squareNumber);*/







//filter function------
/*var taka=[2,3,4,5,7,8,56,9];
var newNumber=taka.filter(function(t){
    return t>10;
})
console.log(newNumber);*/
 
/*var money=[2,3,3,5,6,7,9,8];
var newNumber=money.filter(function(d){
    return d>5;
}); console.log(newNumber);*/


	// check for positive number use filter-----
	function ispositive(element, index, array)
	{
	return element > 0;
	}
		
	// Driver code
	var arr = [ 11, 89, -23, 7, 98 ];
	
	// check for positive number
	var value = arr.filter(ispositive);
	console.log( value );


	// check for odd number
	function isodd(element, index, array)
	{
	return (element % 2 == 1);
	}
	// Driver code
	var arr = [ 11, 89, 23, 7, 98 ];
	
	// check for odd number
	var value = arr.filter(isodd);
	console.log( value );

//------map function-----

// language is TypeScript

	// Driver code
	var arr = [ 11, 89, 23, 7, 98 ];

	// use of map() method
	var val = arr.map(Math.log)
	
	// printing element
	console.log( val );


    // language is TypeScript

	// Driver code
	var arr = [2, 5, 6, 3, 8, 9];

	// use of map() method

	var newArr = arr.map(function(val, index){

	// printing element
	console.log("key : ",index, "value : ",val*val);
	})
