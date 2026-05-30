after before
css variable
tailwindcss
pseudo classes like you have studied about hover and all
h1::after{
    content: ""; it is compulsory part
}
since h1 is a block element it occupies full width of the screen that's why we use pseudo elements in order to put anything after it
the thing you will put in h1 it will dispaly after it and same for pseudo element before also.but this content is not real it is a virtual content you cannot simultaneously select it.
you can do everything like as you can do with text.
and this is not directly mention in inspect elements tag
ye content ke upar work karta hai jaise ki agar app ne ek box me box likha toh before/after use karne pe wo uske content ke before after me add hoga na ki box ke agge ya piche
you can give any styling to it as you can give that content of box
content is necessary to add in this if you not add this it will result in the error
uses of after and before:-
undieline animation:
nav{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
    color: white;
    gap: 10px;
}
h4{
    font-size: 40px;
    /* border-bottom: 2px solid transparent; */
    position: relative;
}
h4::after{
    content: "";
    height: 4px;
    width: 0%;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    transition: all ease 0.6s;
    background-color: red;
}
h4:hover::after{
    width: 100%;
}
scale:it is used to make the size of element enlarge
best way to write scale using transform translate then scale 

Css Variables:these are the css values you acn use it at multiple places like some segment of website have same colour get used like setting of primary colour to the website it is used to maintain font colour size consistently these are coustom properties
:root{
    --king:rgb(221, 213, 55);
    --queen:rgb(249, 105, 129);
    --pad-btn:10px;
}

Tailwind css{
    you can use multiple classes in it and accordingly you will give properties to the element
    each class fulfill one utility or property
    you can use multiple classes in css with one property according to the property required you will use it in html
    <h1 class="red large">Swatantra singh</h1>
      <h2 class="blue large">Byee Byee good night</h2>
      <h3 class="red small">Kal mai nahi padha tha</h3>
      <h4 class="green small"> Mere se mat bolo</h4>
}it is a utility post framework

earlier we are using bootstrap in which there is no possibility of customization but in tailwind we make a class for each property led to customize a particular element accordingly 
eg:btn{
    height: 100px;
    width: 250px;
    color: orangered;
    border:4px solid orangered;
    margin-left: 200px;
    margin-top: 200px;
    border-radius: 15px;
    font-size: 30px;
    font-weight: 600px;
    position: relative;
    background-color: transparent;
    overflow: hidden;
}
agar tumne ise multiple jagah use kiya hai toh tum ek property me change karoge sari change ho jayegi lekin tailwind me koi ek property change karoge to wo wahi reflect hoga jaha tumne use use kiya hoga

Using tailwind css:
search on google
tum cdn bhi use karshakte ho content delivery network for it
play cdn pe jao aur copy kar lo script paste kar do
aur uske according you can use it
cdn paste karne ke bad direct class ka use kar shakte ho anur tailwind css ki website use kar shakte ho search the property and then use act similarly as css
you can use dark mode and light mode 
tailwind css inbuilt hai aur tum use directly use kar shakte ho

you can use clip path for making a particular shape search clip path on google and copy clipath for the shape and paste it in css