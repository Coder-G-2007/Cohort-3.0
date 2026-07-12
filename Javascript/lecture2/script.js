// var a='30'
// var b=20
// console.log(a*b);
// var a2=Number(a)
// console.log(typeof(a2));
// var c='ashu'
// var d=Number(c)
// console.log(d);//NaN dega because you are coverting the string

// var g=Number(prompt('Number 1 dedo:'))
// var h=Number(prompt('Number 2 dedo:'))
// console.log(g+h);


//Increment/Decrement
// var a=10
// a++
// a++
// console.log(a);
// a--
// console.log(a);
// console.log(a++)//pahle print karega fir increment karega
// console.log(a)
// console.log(++a)//pahle increment kar do fir print kar do
// //same you can do for decrement also

//comparision
// var a=10
// var b='10'
// console.log(a===b)
// console.log(a !== b)

//logical
// var a=10
// var b=20
// var c=10
// var d=10
// console.log(a<b || c>d)
// console.log(a<b && c==d)


//conditionals
// var a=20
// var b=10
// if(a>b){
//     console.log('nachiooo')
// }
// else{
//     console.log('Kudiooo')
// }

// var age=Number(prompt('Enter your age:'))
// if(age>=18){
//     console.log('You can vote')
// }
// else{
//     console.log('You can not vote')
// }

//three subject average marks comparision more than 85 get schorship less than it not get
// var  physics=Number(prompt('Enter phy Marks:'))
// var  chemistry=Number(prompt('Enter chem Marks:'))
// var  math=Number(prompt('Enter maths Marks:'))
// var avg=(physics+chemistry+math)/3
// console.log('Your avg marks are:',marks)
// if (avg>85){
//     console.log('You will get scholarship.')
// }
// else{
//     console.log('You will not get scholarship.')
// }

//Implemetation of grading system if-else tree
// var  physics=Number(prompt('Enter phy Marks:'))
// var  chemistry=Number(prompt('Enter chem Marks:'))
// var  math=Number(prompt('Enter maths Marks:'))
// var marks=(physics+chemistry+math)/3
// console.log('Your avg marks are:',marks)
// if (marks>85){
//     console.log('A+')
// }
// else if(marks>=60){
//     console.log('B+')
// }
// else if(marks>=50){
//     console.log('c+')
// }
// else if(marks>=33){
//     console.log('D')
// }
// else{
//     console.log('Fail.')
// }

//govt paise dege 18 se 60 ke bich wale age ko (Nested if else hai)
// var age= Number(prompt('Enter your age:'))
// var gender=prompt('Enter gender (M/F):')
// console.log(age)
// if(gender=='F'){
//     if(age>=18 && age<=60){
//     console.log('You will get 1500rs per month ')
// }
// else{
//     console.log('You are not eligible')
// }
// }

//Ternary operator
// console.log(10>5?'Hello':'Bye')
// console.log(10==10?'sahi hai':'gaalt hai')

// var a=10
// var b=20
// a>b?console.log('badhiya hai'):console.log('galat hai')


//switch
var marks=80
 switch(true){
    case (marks>=75):{
        console.log('Hello ji helooo..')
        break
    }
    default:{
        console.log('app fail ho')}
 }