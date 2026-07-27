var a=[10,20,30,11,44,45,211]
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);// it will give undefined if no values are defined
var arr=['Swatantra','Krrish','Harsh','Vaibhav']
console.log(arr);
//updation
arr[2]='Divyanshi'
console.log(arr);
//you can store data of multiple datatypes
var arr3=[10,10.5,'harsh','krrish',false,'null']
console.log(arr3)
//length of array is index+1
console.log(arr3.length);

console.log("last element:",arr3[arr3.length-1],"and last index is:",arr3.length-1);
//arr[-1] give you undefined because array is type of object
console.log(typeof(arr3));

//push new element at last of array
arr3.push(99)
arr3.push(100)
console.log(arr3);
//pop used to remove element from last of array
arr3.pop()
console.log(arr3);
arr3.pop()
arr3.pop()
console.log(arr3);

//for adding at front
arr.unshift(1)//1 ko aage add kar dega
arr.unshift(2)
console.log(arr);
//removing element from first index
arr.shift()
arr.shift()
arr.shift()
console.log(arr);

var arr1=[11,22,33,44,55]
//removal and adding from center ar from any other place
//for this splice is the method
//arr1.splice(startindex,deletecount,newitems) for removal
arr1.splice(1,2)
console.log(arr1);
//arr1.splice(startindex,deletecount,newitems) for adding the element
arr1.splice(1,0,99)
console.log(arr1);

// for replacing the element
arr1.splice(0,1,99)//index zero se hata ke 99 ko zero index pe rakh dega
console.log(arr1);

//adding multiple element
arr1.splice(0,0,88,99,111)//jo sequence me doge usi sequence me add karega matlab same to same rakh dega
console.log(arr1);

var arr2=[]
var arr4=new Array(5)//empty array with 5 elements
console.log(arr4)

arr[10]=100
console.log(arr.length)//the element you have not given is empty but it willgive full length
console.log(arr)
//you can also make multidimensional array
var arr5=[arr,10,20.5,30]
console.log(arr5);

var arr6=[
    [1,2,3,4],
    [3,4,5,6],
    [6,7,8,9]
]
console.log(arr6);
console.log(arr6[2][2]+arr6[0][1]+arr6.length);

arr1.reverse()
console.log(arr1)

a.sort()//by default arrange in ascending order work well for single digit number
console.log(a);//not the correct way it compare first digit  from the leftmost digit and sort it not sort the whole given number
a.sort((a,b)=>a-b)// it properly sort it is highvalue function
console.log(a);
a.sort((a,b)=>b-a)// it properly sort it is highvalue function and do reverse sort also in descending 
console.log(a);

// for(let a=0;a<arr1.length;a++){ normal for loop
//     console.log(a);   
// }
var arr6=[10,20,30,40,33,44,555,6666]
//for of loop
//for(value of arr)
for(value of arr6){//called as forof loop
    console.log(value);
    
}

for(a of arr6){
    console.log(a);  
}

//#question even no till hundred
var arr5=[]
for(let a=0;a<=100;a++){
    if(a%2==0){
        arr5.push(a)//for reverse printing you can directly use unshift
    }
}
console.log(arr5);

//non mutable method on array-non mutable matlab ariginal array me koi change nhi karege
//mutable matlab original array me change hoga like push pop splice unshift shift
//push me agar koi parameter hoga toh wo length deta hai


//ab ham non mutable padhege like slice

arr7=arr6.slice(0,2)//slice(startidx,lastidx) lastidx exclude hota wo value nhi leta hai
console.log(arr6);//original array me koi element delete nhi hota hai
console.log(arr7);//slice extract the exact portion while splice is used to add remove and update

console.log(arr6.slice(2,4));//index 2,3 milega

arr7=arr6.concat(arr)//do array ko jodne ka kam karta hai
console.log(arr7);

console.log(arr6.includes(30));//pata karta hai ki wo element hai ya nhi
console.log(arr6.indexOf(30));//uss element ki index deta hai jo exist nahi karata hai uska index -1 de deta hai
console.log();

var str='swatantra singh'
var arr8=str.split(' ')
console.log(arr8);
var arr9=str.split('')
console.log(arr9);

arr10=['harsh','krrish','swatantra']
arr11=arr10.join('-')//ye tino element ko join kar dega
console.log(arr11);

//the reference behaviour of array
var a=10
var b=a

b++
console.log(b);

var arr12=[10,20,30]
var arr13=arr12//ek array ka change fono me visible hoga ye reference datatype hai

arr13.push(99)
console.log(arr13);
console.log(arr12);//kisi bhi ek me value update karne pe dono me ho rahi hai yahi hai reference behaviour of array hai
// array ka data heap memory me store hota hai in form of stack thats why we see
//  reference behaviour of element array ka data kahi aur hota hai but uska address 
// store hota hai wahi se reference ho jata hai agar koi nayi array wo bhi wahi location 
// ko point out karta hai issi liye ek me bhi change karne pe dono me change aayega kuki 
// dono ek hi location ko point out karta hai
//dono variable banne ke bad wo array ka address hi store kiye hue hai ek ka change dono me visible hoga isliye ise reference behaviour of array kahte hai
//primitive me jo data hota wo wahi par store hota wahi reference me data ka address store hota hai data kahi aur hota hai uski location ko point out karta hai
//help karta hai efficiency and dynamic size and memory management

//instead of that coping directly we use without copying address
var arr14=[arr12[0],arr12[1],arr12[2]]//spreading the original array to copy in another array
arr12.push(70)
console.log(arr12);
console.log(arr14);
//short cut method for this using spread operator
var arr15=[...arr12]//equal to var arr14=[arr12[0],arr12[1],arr12[2]] reference nahi hota hai
arr15.push(90)
console.log(arr12);
console.log(arr15);
