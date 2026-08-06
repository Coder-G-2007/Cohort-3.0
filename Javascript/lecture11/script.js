console.log("Hello1");
console.log("Hello2");
console.log("Hello3");
//till now we have stuied that all things in javscript work synchronously that means in a order fashion
var a=10
var b=20
var c=a+b
console.log(c);
function a1(){
    console.log(c);
}
a1()

console.log('Start');

setTimeout(function run(){
    console.log('1.Hello gyus!-->This get execute in delay of 4s it is time out');
}, 4000);

console.log('End');//ye bhi execute ho jayega lekin upar ka code jo hai wo 4s ke bad execute hoga
function user(){
    console.log('2.Hello Swatantra!');
}
setTimeout(user, 5000);//ye sala async work kar raha hai

setTimeout(() => {
    console.log("3.Hellooooo");
    
}, 1000);
console.log('End hogya');


// console.log('Start');
// setTimeout(function(){
//     console.log('Time Out');
    
// },0)
// console.log('End');
//abhi bhi time out last me execute hoga because it is async and get executed accordingly from callback queue managed by event loop and then final execution in call stack. event loop jab tak pura sync ka space khali nahi hoga tabtak event loop callback queue async ko execute hone ke liye nahi bhejega bad me bheje ga call stack me jab wo kahli ho jayega.
//agar koi api ko call karlu

let response=fetch("https://api.jsonplaceholder.dev/posts")
console.log(response);//chocolate khilane ka promise matlab execute hoga


