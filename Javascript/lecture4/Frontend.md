functions are the reusable systematic accessable block of code
function abc(){
    console.log("Hello");   
}

abc()

function walk(){
    console.log("Walking...");
    
}
function sing(){
    console.log("Singing...");
    
}
function dance(){
    console.log("dancing...");
    
}

dance()
walk()
sing()

function greet(){
    console.log("Good afternoon...");
}
greet()

using argument and parameter in function
function greet(parameters){
    console.log("Good afternoon...",a);
}
greet(arguments)

types of function
//function decleration
function a1(){
    console.log("Hello gyuys!")
}
hosting is possible you can call from anywhere

//First class function
//function expression
var b1=function(){
    console.log("Hello gyuys!")
}
no hosting is possible you can not call from anywhere

//fat arrow function 
var c1= (a)=>{
    console.log('Hello guys! 3',a);
    
}

var c2 =()=>console.log('hello guys4!');//one liner function

var c2 =(a,b)=>console.log('hello guys4!',a,b);//one liner function
c2('maitary',420)

var c3 =a => console.log('hello guys!',a);//complete one liner function
c3('Krish')

//IIFE (Immediately Invoked function expression) maintainablity of code 

// (function(){
//  console.log('This is IIFE');
// })()//runthe moment it is defined without calling
// it make the private scope varable scope get control

(()=>console.log('hello..'))()

//pure functions-->the function which do not hurt a variable have same input give same output not change it
//impure functions-->output may varies changes the external variable
function sqrt(a){//pure function
    var b=10//ye koi external variable ko nahi ched raha hai
    b++
    return a*a
}
console.log(sqrt(5))
console.log(sqrt(10))

var a=10//impure function
function abc(){
    a++
    return a
}
console.log(abc());
console.log(abc());

global execution context: where all things gets to run