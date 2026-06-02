why javascript? what is it?
it is an scrippting language
1990s-timberners lee html http server first time
browser made to run this mosaic browser by netscape made by engineer of same company engineer 
first website info.cern.ch
brendeneik:language that is very compaitable with the browser he made language after 10 days mocha for netscape navigator and made the language livescript and java at that time is very popular and named as java script
microsoft make an languge called j script and they are made for different web browsers java script for netscape and jscript for edge and which create problem for the developer in making website make it comptaible for a particular browser
2008 me ek aur browser launch hua called as chrome and netscape change to mozilla firefox and chrome engine called as v8 engine and after sometime a person make nodejs which make it very powerful in browser section
Node js:is a run time environment it help to make server also

js is single threaded synchronous language it is used to make fuction and backend for your web browser you can mobile app also liabries also and desktop application also you can work on robotics also and in daps making in blockchain that's why it is most popular language also and behave in unique way most loved and most hated language for developer also

JS basics:
console.log("I am swatantra singh") for normal text
console.log('Welcome to javascript')
console.warn('This is warning') for giving warning on console
console.error('This is error') for giving error on console
console.table(['Swatantra','Harsh','Krrish']) array in form of table

Server:give request response to the client
two types of rendering:
client side:data get loaded on client side computerby the browser
server side:loading of data give better seo

variables:for storage of data acts as a type of container

java script is dynamically intrepreter language not require any type of datatype

variable cannot start with digit and there are certain reserved keyword also that canot be used
camelCaseShreyiansCodingSchool use are best first word is totally small


Datatypes:
premitive: for a time you can kept one value
Number(10,20.55,-10,999999)
string(cahracter or set of character:'h','I am swatantra',"This is cohort 3.0")
boolean(true,false)
undefined(var not get initialized with any value then by default it will take some value that is undefined it is kind of value )
null(it is used to make var intentionally empty not have anykind of value,null have datatypes as object)
BigInt(number have certain range like 2^53-1,but BigInt can store more than it it have infinite range)
symbol(not use much making value as unique and immutable)
var g=Symbol('hi')
var h=Symbol('hi')
console.log(g==h);

non-premitive(Reference):
array 
objects
function

typeof:are used to know datatypes of variable

alert:tumko jawab dega
confirm:tumse confirm karega aur tum use store bhi kara shakte ho
prompt:user se sawal puchte ho wo jawab deta hai
dhyan rhe name ek reserve keyword hai

alert('This is message soch samaj ke agge badhna')

var ans=confirm('Are you Swatantra singh?')
console.log(ans)

var user=prompt('Are you Swatantra singh?')
console.log(user);
prompt ka output string me store hota hai

string white color me dikhai deki aur number hamesa blue colour me dikhai dege
console.log(typeof(user));

string has unique feature called concatination
+: addition,concatination of values but other operator not work
var h=10
var i='swatantra'
console.log(h+i)

var h=10
var i='swatantra'
console.log(h-i)
output me NaN milega which means not a number

var num1=prompt('Enter number 1:')
var num2=prompt('Enter number 2:')
console.log(num1+num2)//prompt sting me result deta hai

var num1=prompt('Enter number 1:')
var num2=prompt('Enter number 2:')
console.log(num1-num2)
// but yaha par shrif + me hi dikkat aayagi baki opertor ke liye sahi kam karege ye cohesion hoga