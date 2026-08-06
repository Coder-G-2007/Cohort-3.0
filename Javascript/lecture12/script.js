// function orderFood(){
//     console.log("Food Aa gya");
// }
// //async operation hai
// orderFood() //khana aane me samay lagega
// async function datalao(){
//     let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // let data=await response
//     console.log(response.json());
// }
// datalao()

// //Now we will make an promise
// let p1=new Promise(function(resolve,reject){
//     console.log('Promise Pending hai...');
//     let result =true
//     setTimeout(function (){
//         if (result==true){
//         console.log('Value true');
//         resolve()
//     }
//     else{
//         console.log('value false');
//         reject()
//     }
//     },3000)
// })
// p1.then(function(){
//     console.log('Promise is fulfilled.');
// })
// p1.catch(function(){
//     console.log('Promise is rejected.');
// })
// p1.finally(function(){
//     console.log('Promise END');
// })

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

// let response = fetch("https://fakestoreapi.com/products");
// response
//   .then(function (data) {
//     console.log("Data aa gya...");
//     return data.json();
//   })
//   .then(function (mydata) {
//     console.log(mydata);
//   });
// response.catch(function () {
//   console.log("Data nhi aaya....");
// });

//for directly doing this we have a syntetical sugar async await
// async function datalao() {
//     let response = await fetch('https://fakestoreapi.com/products')
//     let data=await response.json();
//     console.log(data);
// }
// datalao()

// async function datalao() {
//     let response = await fetch('https://fakestoreapi.com/products')
//     let data=await response.json();
//     data.forEach(function(elem){
//         console.log(elem.title);
//     })
// }
// datalao()

//Error handling using try catch block in java script
async function datalao() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    data.forEach(function (elem) {
      console.log(elem.title);
    });
  } catch (error) {
    console.error("URL is wrong.");
  }
}
datalao()
