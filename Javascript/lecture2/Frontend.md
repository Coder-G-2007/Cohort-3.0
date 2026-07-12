console is for the developer use only
var-->container which store data there and called as block of memory
var a-->decleration of variable
a=20-->initialization of variable
Binary operation: operation on two operand
1.Arthematic:


2.Increment/decrement:
var a=10
a++ //a=a+1
a++
console.log(a);
a--
console.log(a);
console.log(a++)//pahle print karega fir increment karega(Post-Increment)
console.log(a)//ye increment value dega post wala
console.log(++a)//pahle increment kar do fir print kar do(Pre-Increment)
//same you can do for decrement also
a=a+5 //a+=5
a=a-2 //a-=2
a=a*2 //a*=2
a=a/5 // a/=2


3.comparision:compere two values
== compare karega do values and result true aur false me dega loosely coupled hai matlab ye datatype nahi check karta hai
=== strongly coupled ye datatype ko bhi check karega
>:greater than
<:less than
>=:greater than equal to
<=:less than equal to
!=:not equal to -- no matlab with datatypes loosely coupled
!==: strongly coupled datatypes ka dhyan dega

4.logical:
and && (*) // dono true hone chaiye
or || (+) //dono me se koi ek bhi true


5.Assignment:You get to assign value


alert:give alert msg to the user
confirm:use to confirm the result from user in
ok or cancel ---sawal puchta hai ha ya na
prompt:app se input mangta hai --ye string ke format me jawab store hota hai. '+' ke liye concatiaton hota hai agar 'any operator other than +' it give NaN(not a number) but when you enter any number format then it work perfectly but for string it give Nan
Type coercion:
-implicit:automatically coversion of data type of string data type but in string it store a kind of number but if it is string it give Nan for that but '+' will do string concatination
-explicit:typecasting or typeconversion
var g=Number(prompt('Number 1 dedo:'))
var h=Number(prompt('Number 2 dedo:'))
console.log(g+h);

Conditionals: working on your code on the basis of any conditions when true it work but when it gets false it does not work
if(condition){
    what to do we write here if condition get true or false
    agar condition true hoti hai toh ye chalega
}
else{
    agar condition false hui toh ye chalega
}

truthy value: apart from falsy values
falsy values:False "" null undefined NaN 0
window+. : give you emoji

Ternary operator:shortend method of using if else
console.log(10>5?'Hello':'Bye')
a>b?console.log('badhiya hai'):console.log('galat hai')

switch:it is better to use other than if else chain it is easier to use
break:it is executed and teminate the code when condition gets true