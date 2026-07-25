// function abc(){
//     console.log("Hello");   
// }

// abc()

// function walk(){
//     console.log("Walking...");
    
// }
// function sing(){
//     console.log("Singing...");
    
// }
// function dance(){
//     console.log("dancing...");
    
// }

// dance()
// walk()
// sing()

// function greet(a){
//     console.log("Good afternoon...",a);
// }
// greet(10)
// greet(1)
// greet()//it will give undefined value at a
// greet("Swatantra")

// function add(a,b){
//     console.log('ADD:',a+b);
// }
// add()//it will give NaN
// add(10,20)
// function mul(a,b){
//     console.log('MUL:',a*b);
// }
// mul(10,20)

// function wish(user,age){
//     console.log("good morning..",user);
//     if(age>=18){
//         console.log("Your's welcome");
//     }else{
//         console.log('Your,s not allowed');
        
//     }
// }
// wish('Swatantra',19)
// wish('Pranjal',13)

//types of function
//function decleration
// function a1(a){
//     console.log("Hello guys! 1",a)
// }
//First class function
//function expression
// var b1=function(a){
//     console.log("Hello guys! 2",a)
// }
//fat arrow function 
// var c1= (a)=>{
//     console.log('Hello guys! 3',a);
    
// }
// a1('harsh')
// b1('krrish')
// c1('swatantra')
// var c2 =(a,b)=>console.log('hello guys4!',a,b);//one liner function
// c2('maitary',420)

// var c3 = a => console.log('hello guys!',a);//complete one liner function you can pass only one argument in this
// c3('Krish')

// var d = () =>console.log('Hello everyone'); //if you call this will give an error argument needed at least one

//IIFE (Immediately Invoked function expression) maintainablity of code 

// (function(){
//  console.log('This is IIFE');
// })()//runthe moment it is defined without calling
// it make the private scope varable scope get control

// (()=>console.log('hello..'))()

function aaa(){
    console.log('hello..');
    
}
console.log(aaa());

// you can return a value from function
function bbb(){
    console.log('Dekh lo ham kuch dege..');
    return 10 //ye function wapas deta hai
}
console.log(bbb());

function add(a,b){
    return a+b
}
console.log(add(10,20));
console.log(add(80,70));

function hero(){
    var a=10
    var b=20
    var c=a+b
    return c
}
console.log(hero())
console.log(hero())
console.log(hero())

// for using multiple return function
function permission(gen){
    if(gen =='F'){
        return 'Welocme to women party'
    }else{
        return 'Welcome to mens party'
        
    }
}
console.log(permission('M'));
//the moment when function return it ignore the code below it and gets out of the function

function a(){
    return 10
}
var b=function (){
    return 10
}
console.log(a());
console.log(b());

// var c = ()=> return10;// one liner function not runs directly
var c = ()=> {return 'hello'};
console.log(c())

//pure functions-->the function which do not hurt a variable have same input give same output not change it
//impure functions-->output may varies changes the external variable
// function sqrt(a){//pure function
//     var b=10//ye koi external variable ko nahi ched raha hai
//     b++
//     return a*a
// }
// console.log(sqrt(5))
// console.log(sqrt(10))

// var a=10//impure function
// function abc(){
//     a++
//     return a
// }
// console.log(abc());
// console.log(abc());

// function abc(a,b){
//     console.log('hello guys...',a,b);
    
// }
// abc(10)//for extra parameter if there is no argument then it give undefined
// abc(10,20,30)//if you have extra argument but no parameter then extra value not get printed or get ignored

function abc(...arr){
    console.log('hello guys...',arr)
}
abc(10,20,30,40,50)

// function greet(user){
//     console.log('Welcome!',user);
    
// }
// greet('krrish')
// greet('Swatantra')
// greet()//this will give undefined which looks odd to us then we use default parameter

// function greet(user='Sir'){//default parameter
//     console.log('Welcome!',user);
    
// }
// greet('krrish')
// greet('Swatantra')
// greet()// now default parameter gets printed

// function greet(user='Sir',age=20){//default parameter
//     console.log('welcome ',user,'your age is',age);
    
// }
// greet('krrish',19)
// greet('Swatantra',18)
// greet()
// greet(undefined,90)//you can pass second value by keeping one undefined
// //you can pass a function as function parameter

// //implicit return
// var sq =(a) => a*a;
// console.log(sq(20));


// function pagal(a){
//     return a
// }
// console.log(pagal(10))
// console.log(pagal('hello'))
// console.log(pagal(true))
// console.log(pagal(10,20,30))
// console.log(pagal({name:'sarthak',age:20}))
// console.log(pagal(greet()))//you can pass function here but remember when return accour then it get out of that function

function main(a){
    console.log('this is main function');
    a()//callback function
}
function hero(){
    console.log('I am hero function');
}
main(hero)

function mainroad(len,cb){
    console.log('this is main road,total length of road id',len);
    console.log(cb);
    cb(len/10)
}
function footpath(f=10){
    console.log('this is footpath and length is',f);
    
}
mainroad(80,footpath)//you can pass ananamous arrow function also

// setInterval(function(){
//     console.log('I am swatantra');  
// },1000)

// function print(){
//     console.log('I am swatantra');
    
// }
// setInterval(print,1000)//call back bhi kam karta hai


// //first class functions
//it is a feature or designation 
//you can store it in a variable you can use as first class citizens(number string etc)
//passing and reciving argument and parameter

function daddy(){
    console.log('i am your daddy');
    function baby(){
        console.log('i am baby');
    }
    return baby
}
console.log(daddy());
var ans=daddy()
ans()//ans me abb baby ka function aa gaya hai
daddy()()//it will print directly call the return value also