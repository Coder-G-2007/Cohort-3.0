Everything and anything in javascript is eventually a object.
this-yah ti refer something
when you run the code in javascript youu will get an environment
window object:tells you in which environment you are working and this is a window object
Browser api:give you the dom,location,local storage setInternal,setTimeout,history api,fetch api

this behaves differently at different places

nodejs:java runtime environment
this:is a keyword refering the object that is currently running

this at global level acts as window object(environment on which our code is running)

for normal function:window object

for function with strict mode:you will get undefined

for function inside the object(for using belly functon ()=>):you will get whole object.it happen because of lexical context belly function not have lexical context this this is called as lexical this.it try to catch enclosing scope around it.language not create new this binding

for function inside the object(for using normal function()):you will get whole object
for accessing the value you can use this.firstname(object key name)

use strict:make code runs in better way,optimized,prvent of using global variable anywhere,make you know about small mistakes which you are doing,codes gets moore predictable
ex:a=10
a=20
give you reference error

Errors in javascript:
syntax error:typying mistake it not led any execution at all
like const-->cost
reference error:if you not define the variable it will give you reference error(out of scope also not in your working scope)
type error:assignment to constant variable gives you type error(ek hi constant variable ko fir se value assign kar diya)
range error:when you use the variable gone out of range like var arr(-1)
uri error:global uri decoding and encoding functions
Internal error:like too much recursion


with the help of var and direct assignment you will have that variable in window object and with let you will not get in that


arrow function did not have any context it act as window object and refer back to its parent
in event handler it return the tag itself

-->function sharing in javascript with two or other object
call:normally argument value get passed,give result directly to you

apply:the argument get passed in form of array,give result directly to you

bind:it return the new function to you and call laterly by using the name of the given  function it give brand new function to you

Prototype:they are predefined methods that get used in array objects and function it is kind of extra element(already bani hui methods)

techinacally array bhi andar se object hai aur function bhi andar se object hai
console.log(b.__proto__.__proto__)//ye fuction ke prototypes ko bata dega
Array-->prototype is Array-->prototype is object
Object-->prototype is object
Function-->prototype is function-->prototype is object
that's why we say that in javascript everything and anything is object
You can assign in object proto other object details
obj.__Proto__=company//prototypal inheritance
you can also do protypal channing also
baccha->papa-->dada-->bhagwan(kuch aise hi channing hoti hai)

object.create()//explicit prototype set karne ke kam me aata hai
