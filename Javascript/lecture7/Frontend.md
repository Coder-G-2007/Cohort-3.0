today we wil study about the object
var arr=[10,20,30]//things are in order
//objects help to keep in more ordered way
var obj={//it is a reference datatypes it stored named data
    name:'Swatantra',
    age:19,
    city:'Ghazipur'
}
console.log(obj);
it is equivalent to real life entity
console.log(obj.name);//accessing object element
CRUD=Create,Read,Upadate,Delete
var user={
    name:'Krrish',
    age:19,
    issingle:true,
    batch:'cohort 3.0'
}
console.log(user.city);//reading
user.city='Bhopal'//you have created new element
console.log(user.city);
user.issingle=false//updation
console.log(user);
delete user.issingle//deletion of value
console.log(user);


//for getting all the keys of the object
console.log(Object.keys(user));
console.log(Object.values(user));//ye sari values in form of array de dega
//for getting all the entries
console.log(Object.entries(user));

keys does not have the space in betweeen 

the function made inside the object called as method

//console me agar run karoge tab kya hoga
console.log('hello')
hello
undefined//ye undefined kyu aa raha hai??
console ek object hai aur log uske andar ki method hai
you have written like console.log(console.log()) ek toh tum console pe likh rahe ho aur 
sath hi me console.log() call hota hai isi liye console pe run kare toh undefined value aati hai

Relation between array and object 
array->object,sequential,keys are in 0,1,2,3.. form
object-->object,named keys
vehicle--object
car-->array

object is reference datatype
