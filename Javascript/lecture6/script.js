var arr=[10,20,30,40]
console.log(arr);
for(value of arr){
    console.log(value);
}
//for each
let run=()=>{
    console.log('hello');
    
}
arr.forEach(run)
arr.forEach(function() {
    console.log('Heyyyy...');//arrayke har ek element pe function ek bar chalega
})
arr.forEach(function(elem) {
    console.log(elem);//array ke element print ho jayga
})

var sum=0
var arr1=['ajay','amit','jitendra']
arr.forEach(function(elem,idx){//pahela index--value and dusra index hame index deta hai
    sum=sum+elem//sum+=elem
})
 console.log(sum);


 //map-it is also higher  order function //it return value also
 arr0=arr.map(function(elem){
    return elem*2
 })
 console.log(arr0);

 function double(x){
    return x*2
 }
 arr2=arr.map(double)
 console.log(arr2);
 
 var users=['sarthak','anushka','harsh','Maitery','krrish','Palak','vaibhav','divyanshi']

 arr3=users.map(function(elem){
    return elem+'sharma'
 })
 arr13=users.map(function(elem){
    return elem.toUpperCase()
 })
console.log(arr13);
console.log(arr3);

 arr4=users.map(function(elem){
    return elem.substring(1,4)
 })
console.log(arr4);


//filter ye condition mangat hai operators kam nahi karga
arr5=arr.filter(function(elem){
    // console.log(elem)
    return elem>20
})
console.log(arr5);//jab tak koi filter condition nahi doge tab tak ye koi bhi value return nahi karega
var marks=[55,56,20,33,44,23,45]
var pass=marks.filter(function(elem){
    return elem>33
})
console.log(pass);
var filt=users.filter(function(elem){
    return elem.includes('a')
})
console.log(filt);

//reduce--reduce all element to a single value of an array
arr10=arr.reduce(function(acc,value){
    return acc+value//value me sari value hoti hai aur accumulator add hota hai initaial value hoti hai bara bar wo change hota rahathai jaise step by step hum sum karte jate hai
})
console.log(arr10);
//step1=0+10 //acc har bar change hota rahta hai previous ans leta hai pahle initial value fix karni padti hai
// step2=10+20
// step3=30+30
// step4=30+40
// 100


var fruit=['apple','banana','orange','apple','banana','apple']

var ans=arr.reduce(function(acc,value){
 return acc+2
},0)
console.log(ans);

var ans1=arr.reduce(function(acc,value){
 return acc*value
},1)
console.log(ans1);

var max=arr.reduce(function(acc,value){
    if(value>acc){
        return value
    }
    else{
        return acc
    }
},0)
// step1=0,10
// step2=10,20
// step3=20,30
// step4=30,40
//ab ye return kar dega 40
console.log(max);

// ek bar dekhana hai
// var min=arr.reduce(function(acc,value){
//     if(value<acc){
//         return value
//     }
//     else{
//         return acc
//     }
// },0)

// console.log(min);

var ans3=users.findIndex(function(elem){
    return elem.includes('anushka')
})
console.log(ans3);

var ans3=users.find(function(elem){
    return elem.includes('a')
})
console.log(ans3);

//destructuring
var [a,b,...c]=arr
console.log(a,b,c);



