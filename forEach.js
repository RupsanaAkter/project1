// var numbers=[10,20,30,40,12,23,34];
// for(var i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

/*var price=[1,2,3,4,5,6,7,8,9];
for(var a=0;a<price.length;a++){
    console.log(price[a]);
}*/









// var numbers=[10,20,30,40,12,23,34];
// numbers.forEach(myfunction)

// function myfunction(x){
//     console.log(x);
// }

/*var taka=[1,2,3,4,6,7,8];
taka.forEach(myfunction)
function myfunction(n)
{
    console.log(n);
}*/






// var numbers=[10,20,30,40,12,23,34];
// var squareNumber=[];
// numbers.forEach(function(x){
//     squareNumber.push(x*x);
// })
// console.log(squareNumber);

/*var price=[2,3,4,5,45,7,8];
var squareNumber=[];
price.forEach(function(x){
    squareNumber.push(x*x);
    })
console.log(squareNumber);*/

/*var taka=[2,3,4,5,7,8,56,9];
var squareNumber=[];
taka.forEach(function(t){
    squareNumber.push(t*t);
})
console.log(squareNumber);*/


 /*var price=[1,2,3,4,45,6,7,8];
 var squareNumber=[];
 price.forEach(myfunction)
 function myfunction(e)
 {
squareNumber.push(e*e);
 }
 console.log(squareNumber);*/








/*var numbers=[10,20,30,40,12,23,34];

numbers.forEach(function(x,index,array){
   array[index] = x+5;
})
console.log(numbers);*/

/*var price=[1,2,3,4,5,7,8,9];
price.forEach(myfunction)
function myfunction(value,index,array)
{
    array[index]=value-2;
}
console.log(price);*/

	// JavaScript to illustrate forEach() method
	function func() {
	
		// Original array
		const items = [12, 24, 36];
		const copy = [];
		items.forEach(function (item) {
			copy.push(item + item+2);
		});
		console.log(copy);
	}
	func();


  