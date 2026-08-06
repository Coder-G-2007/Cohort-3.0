Last lecture of javascript
we will study about promisses in today lecture
<!-- Today's motivation -->
<!-- Practice Practice Practice -->
Promise:-it may be fulfilled or fulfilled in future(till then pending) or get failure
ye vada hai ham kuch karge means santawana
three state:
-pending:probable to get fulfill or failure
-fullifiled:requested accepted
-rejected:request denied
api's ko call karte samay ya for doing som easync task
await:make the promises to wait 
async function datalao(){
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response);
}
datalao()
now it will give response

Promise:give you extra layer of security
future me result ya error dega
.then
.catch
.finally


//this whole process is a async process(make payment,eat food,food done)
//order food from zomoto
//order done-->Order confirmed(your food is pending)
//mai wait karuga order ke prepare hoke aane ka
//1.order aa gya
//-make a payment
//Eat food
//Food done
//2.order nahi aaya
//-make a complain
function orderFood() {
  let myOrder = new Promise(function (resolve, reject) {
    console.log("Your is comming...🍔");
    let orderStatus = true;
    setTimeout(function () {
      if (orderStatus == true) {
        console.log("Condition is true");
        resolve();
      } else {
        console.log("Condition is false");
        reject();
      }
    }, 3000);
  });
  myOrder
    .then(function () {
      console.log("Delivery wale bhaiya aa gaye hai.🍕");
      console.log("Now Make Payment🤑");
      let makePayment = false;
      return new Promise(function (res, rej) {
        setTimeout(function () {
          if (makePayment == true) {
            console.log("payment done");
            res();
          } else {
            console.log("payment failed");
            rej();
          }
        }, 3000);
      });
    })
    .then(function () {
      console.log("mai food eating...😉");
    })
    .catch(function () {
      console.log("order failed 🤯");
      console.log("make complaint 😤.");
    })
    .finally(function () {
      console.log("order finally completed 😉");
    });
}
orderFood();


Json:it is like an array having object in that
json it is different data type but it is array of object
keys ki value bhi in form of string hota hai
json--it is fast and occupy less memory

optional chaining:
obj?.greet() not give error check wheater greet exit or not (if you not know it exist or not)

Nullish Cohesion:
var age=0 or null
var obj={
    name:'sarthak',
    myage:age ||33 check for age ?? 33
}
console.log(obj.myage)
<!-- Go through the notes provided in batch help develop advance mindset -->
<!-- Best of luck for Java Script. -->