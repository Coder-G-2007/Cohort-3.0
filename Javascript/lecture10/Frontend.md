we will revise phase four
this:it is an keyword(special keyword)
provide an environment under which javascript is running
arrow function did not have enclosing lexical context while normal function have that it refer to the object in which it is it have its lexical context
lexical context:matlab parent ke piche chala jayega

for function sharing we use:
call:
apply:
bind:

OOPs:-->
DRY:Don't repeat yourself
Constructor:help in reducing of making multiple object
//for constructor function use Pascalcase
new create help you create instances of constructor function called as object also

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


Classes:it is same as constructor function known as syntatical sugar and comes in Es6 version of javascript.
class MakeStudents{
    constructor(){

    }
}

Everything and anything in javascript is object.
Prototype:it is the hidden property give additional power to object,array,function,string,number etc
__proto__:help to know about the additional defined function

for inheritance we use extends keyword in javascript. for extending class we use this keyword
super is a keyword used to access the value of parent class already defined in child class without writing all the things

