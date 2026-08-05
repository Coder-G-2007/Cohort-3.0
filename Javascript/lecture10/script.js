// 'use strict' jab ye ham use karte hai tab function ke andar this ki value undefined ho jati hai
console.log(this);//it refer to global object window
function a(){
    console.log(this);
}
a()
let hero={
    fname:'swatantra',
    lname:'singh',
    age:20,
    getintro:function(){//getintro()
        console.log(this);
    }
}
hero.getintro()//ye pure object ki value de dega
let hero1={
    fname:'swatantra',
    lname:'singh',
    age:20,
    getintro:()=>{
        console.log(this);
    }
}
hero1.getintro()//ab ye arrow function ke sath window object de deta hai jab context nahi pata hota hai toh window deta hai

let hero2={
    fname:'swatantra',
    lname:'singh',
    age:20,
    getname:function(){
        var getintro=()=>{
        console.log(this);
    }
    getintro()
    }
}
hero2.getname()//ab iska lexical context iska object ho jayega kyuki wo parent ke environment me aa gaya hai kyki uska apna toh kuch nahi tha lekin ab use uska lexiacl context mil gaya hai
//arrow function apne parent ke lexical context ko le leta hai

let palce={
    palcename:'office',
    behaviour:'professional',
    sayhello:function(){
        const insideplace={
            palcename:'meeting room',
            behaviour:'roasting',
            sayhi:function(){
                console.log(this.behaviour);
            }
        }
        insideplace.sayhi()
    }
}
palce.sayhello()

let palce1={
    palcename:'office',
    behaviour:'professional',
    sayhello:function(){
        const insideplace={
            palcename:'meeting room',
            behaviour:'roasting',
            sayhi:()=>{
                console.log(this.behaviour);
            }
        }
        insideplace.sayhi()
    }
}
palce1.sayhello()

// let song1={
//     songname:'Cry for me',
//     albumname:'Hurry up tommorow',
//     singer:'weekend',
//     duration:3.5,
//     isliked:true
// }

// let song2={
//     songname:'Tum hi ho',
//     albumname:'Asaqui 2',
//     singer:'Arjit singh',
//     duration:4.4,
//     isliked:false
// }
// function sayHello(){
//     console.log('hello');
// }


//constructor function
function Createsong(){
    this.songname='Cry for me',
    this.albumname='Hurry up tommorow',
    this.singer='weekend'
    this.duration=3.8
    this.isliked=true
}

console.log(Createsong);//full function
console.log(Createsong());//undefined

let song1=new Createsong()
console.log(song1);//it look likes an object

// function Createbook(bookname){//you can set default value also
//     this.bookname=bookname
//     this.authorname='JK Rowling'
//     this.pages=560
// }

// let book1=new Createbook('Harry potter 1')
// let book2=new Createbook('Harry potter philospherstone')
// let book3=new Createbook('Rich dad poor dad')
// book3.authorname='Krrish'
// console.log(book1.bookname);
// console.log(book2.bookname);
// console.log(book3.authorname);

function Createbook(bookname,author,pages){
    this.bookname=bookname
    this.authorname=author
    this.pages=pages
    this.getfrontpage=function (){
        console.log('Bookname:',this.bookname)
        console.log('Author:',this.authorname)
        console.log('Pages:',this.pages)
    }
}
let book1=new Createbook('Harry Potter','JK Rowling',560)
console.log(book1);
book1.getfrontpage()
let book2=new Createbook('Harry Potter 2','JK Rowling',1200)
console.log(book2);
book2.getfrontpage()
let book3=new Createbook('Gaban','Munsi premchandra',490)
console.log(book3);
book3.getfrontpage()

//Constructor function:
// function MakeStudent(fname,lname,contact,isverify){
//     this.fname=fname
//     this.lname=lname
//     this.contact=contact
//     this.isverify=isverify
// }
// let showProfile=function(){
//         if (this.isverify==true){
//             console.log(`Student name is ${this.fname} ${this.lname} and his contact is ${this.contact}`)
//         }
//         else{
//             console.log("User not verified");
            
//         }
//     }
// MakeStudent.prototype.showProfile=showProfile
// MakeStudent.prototype.company='Sheryians'
// let s1=new MakeStudent('Abshiek','Mishra',99999999,true)
// let s2=new MakeStudent('Guga','das',999444999,false)
// let s3=new MakeStudent('Rahul','das',995665999,true)
// let s4=new MakeStudent('Anurag','Mishra',9993344339,false)
// s1.showProfile()
// s2.showProfile()
// s3.showProfile()
// s4.showProfile()
// console.log(s1);
// console.log(s1.company);//ye pahle constructor function me company ko find karega phir use prototype me dudhega then it will give you value of company and its value is same fro a;; the object that are accessing that.ye inheritance ki tarah hai kahi aur se value inherit kar rahe hai

//classes in Es6 version of javascript:
// class MakeStudents{
//     constructor(fname,lname,contact,isverify){
//         this.fname=fname
//         this.lname=lname
//         this.contact=contact
//         this.isverify=isverify
// }}
// let showProfile=function(){
//         if (this.isverify==true){
//             console.log(`Student name is ${this.fname} ${this.lname} and his contact is ${this.contact}`)
//         }
//         else{
//             console.log("User not verified");
            
//         }
// }
// MakeStudents.prototype.showProfile=showProfile
// let s1=new MakeStudents('Abshiek','Mishra',99999999,true)
// let s2=new MakeStudents('Guga','das',999444999,false)
// let s3=new MakeStudents('Rahul','das',995665999,true)
// let s4=new MakeStudents('Anurag','Mishra',9993344339,false)
// console.log(s1);
// s1.showProfile()
// s2.showProfile()
// s3.showProfile()
// s4.showProfile()

class User{
    constructor(fname,lname,contact,isverify){
        this.fname=fname
        this.lname=lname
        this.contact=contact
        this.isverify=isverify
    }
    greetuser(){
        console.log(`Welcome ${this.fname} ${this.lname}`);
        
    }
}

class Admin extends User{
    constructor(fname,lname,contact,isverify){
        super(fname,lname,contact,isverify)//give what are the things that are in it parent
        this.accessAdminPanel=true
    }
    addcourse(){
        console.log('New course added');
    }
    remove(){
        console.log('All courses removed');
    }
    greetuser(){//function overriding
        console.log(`Welocome ${this.fname}`);
    }
}
let u1=new User('Ayush','Rane','9999999944',true)
u1.greetuser()
let u2=new Admin('Swatantra','Singh','9999343344',true)
console.log(u1);
console.log(u2);
u1.greetuser()
u2.greetuser()//parent ka nhi lega kyu ki child me override kar diya hai
u2.addcourse()
u2.remove()
//internally it works like
//user.call(Admin)



let dada={
    fname:'Gr',
    lname:'Sharma',
    land:'120acer'
}
let papa={
    fname:'Rakesh',
    lname:'Sharma',
    property:'100cr'
}

let beta={
    fname:'Sarthak',
    lanme:'Sharma'
}
beta.__proto__=papa//prototypal inheritance ye  pahle beta me jake khojega agar mil gai to console ko de dega agar nahi mili toh woh papa se le lega
papa.__proto__=dada//this is called as prototypal channing
console.log(beta)//beta-->papa-->dada(prototypal inheritance)
console.log(papa)//papa-->dada(prototype inheritance)
//dada-->object(prototype inheritance)
//object-->null(prototype inheritance)

//for constructor function you can use Prototype for prototypal inheritance
//for normal objects you have to use __proto__ like above we have used