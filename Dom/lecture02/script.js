// const body=document.body
// console.log(body.childNodes);
// console.log(body.children);
// const main=document.querySelector("main")
// console.log(main.childNodes);//gives you nodelist
// console.log(main.children);//gives you html collection

// // Changing
// const h1=document.querySelector("h1")
// console.log(h1);
// h1.textContent="Hey main update ho gaya hu by dom js"
// //text content
// //innerText
// //innerHTML
// h1.innerText="Hey....<i>This is itallic</i>"
// h1.innerHTML="Hey....<i>This is itallic</i>"
// console.log(body.innerHTML);
// console.log(body.innerText);
// console.log(body.textContent);

// //changing css
// body.style.backgroundColor="red";
// h1.style.color="blue"
// h1.style.fontSize="50px"
// h1.style.fontStyle="Italic"

// //operation on class
// // const isclass=h1.classList.contains("heading")
// // console.log(isclass);
// // h1.classList.replace("heading","newHead")
// h1.classList.toggle("heading")
// const div=document.querySelector("#div")
// div.classList.add("Division")

//bulb making code
const bulb=document.querySelector(".bulb")
const btn=document.querySelector("button")

// let flag=true
// btn.addEventListener('click',()=>{
//     if(flag){
//         btn.innerText="off"
//         bulb.style.backgroundColor="Yellow"
//         flag=false;
//     }
//     else{
//         btn.innerText="on"
//         bulb.style.backgroundColor="transparent"
//         flag=true;
//     }
// });

btn.addEventListener("click",()=>{
    let val=bulb.classList.toggle("lightUp")
    if(val){
        btn.textContent="off";
    }
    else{
        btn.textContent="on";
    }
})