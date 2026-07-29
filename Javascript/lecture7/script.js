var arr=['Awadh',18,'Bhojpal'] //you will not able to understand which things fulfill what or resemble what
//in object you can do that in key value pair you can keep that
var obj={//it is a reference datatypes it stored named data
    name:'Swatantra',
    age:19,
    city:'Ghazipur'
}
console.log(obj);
console.log(obj.name);//accessing object element
var obj1={
    model:'asus vivobook 15',
    price:630000,
    color:'Light blue',
    isGood:true
}//keys must be in string only it treat every value in string only
console.log(obj1.price);
console.log(obj1);
//css me bhi ham key value pair ka use karte the
//operation on object like crud
//CRUD=Create,Read,Upadate,Delete
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
console.log(Object.keys(user));//sari keys in form of array mil jayegi
var a=Object.keys(obj1)
console.log(a);
console.log(Object.values(user));//ye sari values in form of array de dega

//for getting all the entries
console.log(Object.entries(user));

var inst={
    name:'Sarthak',
    age:33
}
inst.age=20
inst.city='bhopal'
delete inst.age
console.log(inst);
// var username=prompt('Enter name:')
// var age=prompt("Enter age:")
// var city=prompt("Enter city:")
// var obj3={username,city,age}
// console.log(obj3);

var user1={//you can keep primitive as well as non primitive datatypes
    name:'Virat Kholi',
    age:36,
    team:'India',
    skills:['Batting','Dancing','Fielding'],
    spouse:{
        name:'Anushka sharma',
        profession:'Acting',
        age:30
    }
}
user1.ismaried=true
console.log(user1);
console.log(user1.skills);
console.log(user1.skills[0]);
console.log(user1.skills[1]);
console.log(user1.skills[2]);
console.log(user1);
console.log(user1.spouse);
console.log(user1.spouse.profession);

var user3={
    name:'Prince',
    age:20,
    ishandsome:true,
    skills:['HTML','css','js'],
    college:{
        name:'Juet',
        totalstudent:360,
        courses:['webdev','data science','campus palcement']
    }
}
console.log(user3.college.totalstudent);
console.log(user3.college.name);
console.log(user3);
console.log(user3.college.courses);

var obj3={
    name:'Chitthi',
    age:1,
    ram:'20mb',
    isworking:false,
    skills:['fight','walk','dance'],
    creator:{
        name:'vasikaran',
        age:45,
        isintelligent:true
    },
    sayhi:function(a){
        console.log('hello i am chitthi robot.',a);
        return 40 
    }
}
console.log(obj3);
obj3.sayhi()//ye function ko call kar dega
console.log(obj3.sayhi());//agar ye kuch bhi return nhi karega toh ye undefined show karta hai
//the function made inside the object called as method
obj3.sayhi('Rohan')

var maths={
    add:(a,b)=>{
        return a+b
    },
    square:(a)=>{
        return a*a
    },
    cube:(a)=>{
        return a*a*a
    },
    multiply:(a,b)=>{
        return a*b
    }
}
console.log(maths.add(10,20))
console.log(maths.square(11))
console.log(maths.cube(11))
console.log(maths.multiply(11,22))

console.log(typeof console);//object aayega

const arr2=[10,20,330,25]
// Object.freeze(arr2)
// arr2.push(99)//ab push nahi hoga
console.log(arr2);
//question is like how we stop push in arr2--ham seal aur freez laga shakte hai
//with the help of seal exiting value get modified while with the help of freeze existing value not get modified and no other opertion is possible on that

//reln between objects and array
//anthing and everything in javascript is eventually a object

console.log(typeof arr2);//type object hi aayega
// arr2['name']=40
console.log(arr2);

user['name']='Swatantra' //keys get stored in form of array
console.log(user);
//array->object,sequential,keys are in 0,1,2,3.. form
//object-->object,named keys

var obj2={
    name:'ram',
    city:'Ayodhya'
}
obj2['age']=500000
console.log(obj2);

const groom={
    name:'Salman',
    age:60
}
const bride={//const bride ko agr change kare toh prevent karta hai wahi par agar andar ki kisi value ko change kiya jaa shakta hai agar let aur var se bride bana hota toh uska bhi nam change ho jata
    name:'salman',
    age:42
}
console.log(groom.name,"Weds",bride.name);
groom.name='Vikky'
console.log(groom.name,"Weds",bride.name);

//how to stop these changes
//Seal:a seal of box nothing comes in nither goes out.updation(modification) is possible new element na hi add hoge na hi delete
//freeze:actual state me rok deta hai koi change possible nahi hata hai no update is possible
Object.freeze(groom)
Object.seal(bride)

groom.name='Rohan'
console.log(groom)//koi update nahi hoga jo value pahle thi wahi rahegi
bride.name='Anushka'
console.log(bride);//yaha par update ho jayega

//you can also use seal and freeze for the array also
//now we will start with destructuring
var arr5=[11,22,33,44]

// var a=arr5[0]
// var a=arr5[1]
// var a=arr5[2]

var [a,b,c,d]=arr5
console.log(a,b,c,d);

var arr6=['aman','akash','prince','akshay','deep','rohan']
var [a,b,...c]=arr6//...c is act as rest operator(equal to se pahle) and ...c is act as spread operator(equal to ke bad)
console.log(a,b,c);//rest element must be the last element and in form of array it kept it
//for destructuring of object
var obj4={
    name:'akash',
    age:20,
    batch:'Cohort 0.3'
}
var {age}=obj4//for destructuring of this you need to write the key if you are destructuring object
console.log(age);

var {name:fullname,batch}=obj4
console.log(name,batch,fullname);

var {name,...b}=obj4
console.log(b);

//object is also a reference data types if you change one other get changed
var obj5=obj4
obj5.name='harsh'
console.log(obj5);
console.log(obj4);

var obj6={...obj4}//ab ye reference nahi hoga obj6 ka  change obj4 me refelect nahi karega
obj6.name='Mohan'
console.log(obj6);
console.log(obj4);

//shallow copy is not much useful but not actual copy it internally reference also
var obj7={...obj3}
obj3.creator.name='rohan'
console.log(obj3);//yahi hai shallow copy change ho raha hai original array me spread operator ka use karne ke bad bhi ye upar upar se copy kar raha lekin andar ke conten ko reference hi rakh raha hai issi wajah se copy obj7 me change karne par obj3 me bhi change aa raha hai issi ko avoid karne ke ham deep ka concept leke aate hai internal walo ka address reference hi rahata hai ise hi shallow copy kahte hai
//purane walle reference se ye better hai
//JSON.stringify()//kisi bhi given value ko convert kar deta hai in form of string


//JSON.parse()//convert string into an object
var b=10
var c=JSON.stringify(b)
var d=JSON.parse(c)//original type me convert me ho jayega
console.log(typeof b,typeof c,typeof d);

//for properly copying or deep copying //isse hi original copying kahte hai
var str=JSON.stringify(obj3)
console.log(str);
var obj8=JSON.parse(str)
console.log(obj8);
obj8.creator.name='Radhika'
console.log(obj8);
console.log(obj3);

var arr3=[10,{name:'Swatantra',course:'B.tech',age:19},20]

var arr7=[...arr3]//ye array ka shallow copy karega
arr7[1].name='Krrish'
console.log(arr3);
console.log(arr7);

//array deep copy--make completely independdent copy
var str2=JSON.stringify(arr3)
var arr8=JSON.parse(str2)
arr8[1].name='mohan'
console.log(arr3);
console.log(arr8);
//you can also used inbuilt method
var str3=structuredClone(arr3)
// var arr9=JSON.parse(str3)
str3[1].name='rahul'
console.log(arr3);
console.log(str3);

//oneline
var arr10=JSON.parse(JSON.stringify(arr3))//it is same as previous what we have done

//for in loop used for object
for (let a in obj3){
    console.log(a);//ye asri keys ko print kar dega
    console.log(obj3[a]);//ye sari values de dega
}