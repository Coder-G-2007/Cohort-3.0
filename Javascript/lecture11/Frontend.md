Async Javascript we will study this in today lecture
<!-- Today's motivation -->
<!-- Make yourself busy -->
Synchronous:Working in order(Line by line execution) and at one time it process one line at at time thats why we call it single threaded language.
Asynchronous:Working in random order
Execution context:the place where our whole code gets executed
var a=10
var b=20
var c=a+b
console.log(c);
function a1(){
    console.log(c);
}
a1()
Execution context of above phase:
Memory creation||Code Execution
Var a          ||a=10
Var b          ||b=20
Var c          ||c=a+b
Var c          ||console.log(c)
a1={....}      ||if there is any function its 
               ||execution context get 
               ||make 
               ||a1= Memory creation||Code Execution            
               ||                   ||console.log(c)
these all things get happens in call stack-->LIFO(Last in first out work in this)

Function has its own execution context called has function execution context.

AJAX:A-->Async(at one time there is multiple process) we can say that it get happen in parallel work for single process(single destination)
Chalo java script ko Async banate hai

//setTimeout--->Delay
setTimeout(function() {
    
}, timeout value);
timeout value--it is in milli second

Now we understand how this work:
Js Engine working:work in browser
Browser have:console,timer,location,history,bluetooth,network,fetch(),local storage,DOM api,Alert,prompt,confirm,setTimeout,setInterval,canvas all these power we get from webapi(all these things wrapped in window object)+it also include JS engine
Js Engine:access above things from window object
you canalso use it as:
window.alert("This is alert");

setTimeout jitni time out ki value hai utne time ke liye jo function hai wo call stack me wait karega lekin js engine kisi ke liye wait nahi karta jo use milega usko execute kara dega

jo setTimeout function a1 hai wo web api handel karega agli cheez ko chala dega setTimeout ko event loop chalane ka kam karta hai it acts like a gatekeeper(Security Gaurd)
Event loop(Help is execution of Async task) decide which can run and which can not on browser and it run on call back queue(FIFO)
assume stack as resturant and call back queue as coustomer and event loop manages entry and exit in stack
Call back queue me async task line me hoge aur event loop decide karega call stack me space hai ya nhi agar hai toh agla execute karlo use call stack me bhej dega aur execute hoge wo as per stack

let response=fetch("https://api.jsonplaceholder.dev/posts")
console.log(response);
response--console pe promise dega
promise like ye kam kar do kal chocolate duga toh wo kam kare kal tak ka wait karega

promise have three state:
-pending:for the given period promise is pending its state defined later on
-fulfilled:promise get resolved
-rejected:promise not get fulfilled

promises ke liye nayi queue banegi isme ham Microtask Queue kahte hai aur yr sab event loop manage karega lekin ye microtask queue like vip line hai aur GEC(issi ka hotel hai ye assume kar lo) ke execute hone ke turant bad microtask queue execute hoga sabse bad me normal line(Call back queue execute hoga) lekin kya jabtak vip khana kahyege kya tab tak normal line wale bhuke(starvation of call back queue hoga) rahega

Microtask queue me:Promsises handling and mutation observer(change on DOM tree) bake sari cheeze call back queue me aajayegi lekin sabka execution call stack queue me hi hoga

let int=setInterval(() => {
    console.log("Hello....")
}, interval);
 ye sab execute hoga ek particular interval ke bad execute karta rahega in repetation acts like controlled loop
 setTimeout(function(){
    clearInterval(int)
 },5000) ye interval wale repetation ko rok dega

