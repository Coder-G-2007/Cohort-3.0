'use strict'
var a=function(){
    console.log('hello');
}
a()
console.log(this);//global level it acts as window object
console.log(window);


var b=function(){
    console.log(this);
}
b()

// var obj={
//     firstname:'Swatantra',
//     lastname:'Singh',
//     age:33,
//     sayhi:()=>{
//         console.log(this)
//         console.log(this.firstname)//undefined
//     }
// }
// obj.sayhi()// here you will get window object
var obj={
    firstname:'Swatantra',
    lastname:'Singh',
    age:33,
    sayhi:function(){
        console.log(this)//give full object
        console.log(this.firstname)//give firstname
        this.firstname='harsh'//you can update value also
        console.log(this.firstname)
    }
}
obj.sayhi()

var obj1={
    firstname:'Swatantra',
    lastname:'Singh',
    age:33,
    sayhi:function(){
        const getIntro=()=>{//yaha pe lexical context toh nahi hai lekin ye apne parent ke lexical contxt ko de dega
            console.log(this)
            console.log(this.firstname)
        }
        getIntro()
    }
}
obj1.sayhi()

var c=10
console.log(c);
//console.log(d);//gives reference error since it is not defined

var ob2={
    name:'swatantra',
    age:20,
    company:{
        name:'Sheriyans',
        abc:function(){
        console.log(this.name);
        }
    }
}
ob2.company.abc()

var ob3={
    name:'swatantra',
    age:20,
    getCompany:function(){
        const companyname={
        name:'Sheriyans',
        abc:()=>{
        console.log(this.name);
        }
    }
    companyname.abc()
    }
}
ob3.getCompany()

var ob4={
    name:'swatantra',
    age:20,
    getCompany:function(){
        const companyname={
        name:'Sheriyans',
        abc:function(){
        console.log(this.name);
        }
    }
    companyname.abc()
    }
}
ob4.getCompany()
console.log("------Call---------")
var student1={
    firstname:'Swatantra',
    lastname:'singh',
    getintro:function(city){
        console.log(this.firstname+" "+this.lastname);
    }
}
student1.getintro()
var student2={
    firstname:'harsh',
    lastname:'Mishra'
}
student1.getintro.call(student2)//ab ye second object ki value ko print kar dega
var student3={
    firstname:'Krrish',
    lastname:'bardiya'
}
student1.getintro.call(student3)

var getname=function(city){
    console.log(`${this.firstname} ${this.lastname} ${city}`);
}
console.log("-------Call--------")
getname.call(student1,'Ghazipur')//ye get name function ko student1 ke data ke sath bind kar diya hai
getname.call(student2,'Patna')
getname.call(student3,'Bhilwara')//value bhi pass ho shakta hai

console.log("-------Apply--------")
getname.apply(student2,['patna'])
//apply me argument get passed in for of array

console.log("-------Bind--------")
var out=getname.bind(student3,'Bhilwara')
out()

console.log("-------Prototype--------")
var arr=[10,20,30,40]
arr.push(50)
console.log(arr);
console.log(arr.__proto__.__proto__.__proto__);//pahel array ke prototype fir object ka dega ye aur jab object ka find karoge toh null hota hai

console.log(b.__proto__.__proto__)

console.log(Array.prototype.__proto__);
console.log(Function.prototype.__proto__);
console.log(Object.prototype);

console.log(Array.prototype.__proto__===Object.prototype)
console.log(Function.prototype.__proto__===Object.prototype)

// function Student4(username,password){//constructor function if a object is already defined
//     this.username=username
//     this.password=passsword
// }
// Student4('Swatantra',123)
// console.log(Student4.prototype);
