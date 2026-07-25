what and why js?
console
variables
data types
alert confirm prompt
conditionals
operations
we have studied till here

today's topic
loops:used to do repeatative work
while(condition){
    true
}
yaha pe jabtak condition true tab tak chalege
infinite loop:condition is universal run until your ram get filled.
while(10>5){
    console.log('hello')
}//it is an infinite loop

controlled loop
var a=0
while(a<10){
    console.log('hello')
    a++
}

do while loop it is he loop run one time then it check the condition
do{
    console.log("hello")
}
while(11<10)
galat hone par bhi ek bar chalega

for loop
for(initialization;condition;increment or decrement )
for(var a=0;a<10;a++){
    console.log('hello')
}

for making of variable we can use
var let const
var a = 10 ye ek global variable ban jata hai automatically
webapi used to access js in browser it act as wrapper over js
webapi used to give additional feature like dom(what you display on screen),promisses(it is used to async),location,history,local storage(browser small storage),timer(date also)
js+webapi=browser wrapper,fetchapi(gets data from backend)
webapi--give alert,prompt,confirm
console.log(window)--give web api details

when you used var it get store also thats why it is called global variable give problem in production(Es5 version it is used)

let-not get add in web api(behave same as var)
const--(slight different with var)

var-me app value ko reassign karshakte ho 
let me bhi kar shakte ho new assignment lekin in const it is not possible

var--value updation/it is function scope
let--value updation/block scoped
const--no value updation happen/blocked scope

also there is difference in scope also var act karega function ke andar hi bahar access nahi ho shakta agar under defined hai tab let and const acts as blocked scope

// var name='Swatantra' // you can also use back tick `swatantra` valid way
// var age=20
// var gender='male'
// console.log("hero name is:",name," his age is:",age," his gender is:",gender)
// //if we use backtick then more best way this way is called 
// // template literals it also help to changed lines also
// console.log(`hero name is ${name} , his age is ${age} , his gender is ${gender}.`);

string are immutable temporary change not affects the to permanent but updation possible

var user='Anurag and swatantra'

console.log(user.length);
console.log(user.toUpperCase());
console.log(user.toLowerCase());
console.log(user.indexOf('g'));//index always start with zero
console.log(user.includes('swatantra'));//give result in true or false
console.log(user.slice(0,5));//handel negative index start from previous
console.log(user.substring(11,18));//not handel negative value it consider it positive value of zero
console.log(user.replace('Anurag','Krrish'));
console.log(user.split("and"));//split in different array
console.log(" ram ".trim());//remove staring and trailing spaces
console.log("abc".repeat(3));
console.log(user.startsWith("Anurag"));
console.log(user.endsWith("tra"));
console.log(user.charAt('2'));
console.log(user[0]);

jshero--website to learn javascript

break:it is use to break the loop when it gets executed
continue:when that value gets true it skip that value and then continue
for(var a=1;a<=10;a++){
    console.log(a);
    if(a==3){
        break;
    }
}
for(var a=1;a<=10;a++){
    if(a==3){
        continue;
    }
    console.log(a);  
}

functions:reusable,accessable,systematic block of code

