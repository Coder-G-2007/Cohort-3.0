for each--iteration
run the function on each element it is higher order function
take function as an arugument and pass it as parameter
arr.foreach(function(){
    console.log('hello')
})

it does not used to return any value





map--transform--doubling gettin square of the value means that it get transform
it return the value also and in return statement used what you want to transform
 arr0=arr.map(function(elem){
    return elem*2
 })
 console.log(arr0);

 function double(x){
    return x*2
 }
 arr2=arr.map(double)
 console.log(arr2);
 always return new array no change in original array
transform,length same rahegi,har element add hoga

filter--filteration
filter the value from current array and used to form new array on the basis of that
var marks=[55,56,20,33,44,23,45]
var pass=marks.filter(function(elem){
    return elem>33
})
console.log(pass);
select.length change ho shakti hai,sirf amtching element hoge


reduce--reduce
hamare array ko ek simple single value me convert kar dega,largest,smallest,sum
arr10=arr.reduce(function(accumulator,value),initial value of accumulator)

arr.reduce(function(acc,value){
},initial value of acc)

find-find one element and return first find element
findindex-find the index of element which first gets find
some--it used to check for some element if in one that is find then it return the value as true
every--check every element have the value you want if it is find in every then it return true
see all above four one time

destructuring: take out elements from the given array
var [a,b,...c]=arr
console.log(a,b,c);
you can skip value also
console.log(a,,,c);
in today's class we will do that