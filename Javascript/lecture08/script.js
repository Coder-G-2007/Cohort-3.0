var a//decleration ke time memory create ho raha hai
var b//decleration ke time memory create ho raha hai
var c//decleration ke time memory create ho raha hai

a=10//initialization code execution ke time hota hai
b=20//initialization code execution ke time hota hai
c=a+b//initialization code execution ke time hota hai

console.log(c);//run at the time of code execution jake bolega web api ko console pe run karo

function add(){
    var d=a+b
    console.log(d);
}
add()
function sub(){
    var e=b-a
    console.log(e);
}
sub()
var d=a*b
console.log(d);

// console.log(e);//it will run and value is undefined 
// console.log(f);//it will give the error

// var e=10
// let f=20//let ko pahle hona tha ye temporal dead zone me fas jayga memory creation me toh hoga lekin koi value nahi hogi aur code execution ke time define nahi hai iska error nahi milega baliki reference not found error dega wahi temporal dead zone hai ye const ke liye bhi hota hai f =20 ke upar sre temporal dead zone hota hai aisa hi const ke liye bhi hoga usme app c ko use nahi kar paoge

var user='harsh'
function greet(){
    var age=20
    function sayhi(){
        console.log('Your age is:',age);
    }
    return sayhi
}
var out = greet()
console.log(out);

out()

function parent(){
    var user='ramesh'
    function child(){
        var childname='ankit'
        console.log('parent:',user);
        console.log('Child:',childname);
   
    }
    return child
}

var out=parent()
out()

function grandparent(c){
    return function(b){
        return function(a){
            console.log(a,b,c)
        }
    }
}
grandparent('Aman')('Rohit')('rahul')
