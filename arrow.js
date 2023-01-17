
//traditional function-------

/*function display1(){
    console.log('I am display1');
}
display1();*/
/*const myfunction=()=>{
    console.log('myfunction');
}
myfunction();*/






//arrow function---------
/*const display2 = ()=>{
console.log('I am Display2');
}
display2();*/

// traditional function-------
/*function message1(){
    return "Hi, I am message1";
   
}
console.log(message1());*/


// arrow function---------
/*const message2=()=>{
    return "Hi, I am message2";
}
console.log(message2());*/

//shorcurt arrow------
/*const message3=()=> "Hi, I am message3";
console.log(message3());
message3();*/


//traditional function-----

/*function add(num1,num2){
    return num1+num2;
}
console.log(add(10,20));*/

// arrow function------
/*const add2=(num1,num2)=> num1+num2;
console.log(add2(45,20));*/

/*const msg =(num1,num2)=>
   num1+num2;

console.log(msg(45,30));*/


// traditional function---------
/*var persons=[
    {
        id:345,
        name:'Rup',
        gpa:3.57
    },
    {
        id:3454,
        name:'Sana',
        gpa:3.56
    },
    {
        id:34545,
        name:'Akter',
        gpa:2.57
    }
]
function personNames(){
   return persons.filter(function(x){
        return x.gpa>3;
    }).map(function(y){
return y.name;
    })
}
console.log(personNames());*/

/*var students=[
    {
        id:23345,
        name:'Kamal',
        gpa:4.56
    },
    {
        id:23345345,
        name:'Jamal',
        gpa:3.56
    },
    {
        id:23345568,
        name:'Ramal',
        gpa:5
    },
    {
        id:2334523344,
        name:'Pamal',
        gpa:3.50
    },{
        id:23345789,
        name:'Kasem',
        gpa:2.50
    }
]
function studentsNames(){
    return students.filter(function(x){
      return  x.gpa>3.50;
    }).map(function(y){
        return y.name;
    })
}
console.log(studentsNames());*/






// arrow function----------
/*var persons2=[
    {
        id:345,
        name:'Rup',
        gpa:3.57
    },
    {
        id:3454,
        name:'Bithy',
        gpa:4.6
    },
    {
        id:34545,
        name:'Jamil',
        gpa:3.57
    }
]
const personNames2=()=>persons2.filter((x)=>x.gpa>4).map((y)=>y.name);
console.log(personNames2());*/

/*var students=[
    {
        id:345,
        name:'Rahul',
        gpa:5
    },
    {
        id:345345,
        name:'Ruhul Amin',
        gpa:4.5
    },
    {
        id:345123,
        name:'Rahim',
        gpa:2.5
    },
    {
        id:34589,
        name:'Kader',
        gpa:4.5
    }
]
const studentsNames=()=> students.filter((x)=>x.gpa>4).map((x)=>x.name);
console.log(studentsNames());*/