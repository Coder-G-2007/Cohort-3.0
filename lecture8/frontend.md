<!-- Responsive css -->
<!-- Media queries -->
def:it is used to make layout according to different screen size it help in adoption according to tablet,mobile and desktop

@media (width:400px) {
    #box{
        background-color: aqua;
        height: 100px;
        width: 100%;
        border-radius: 25%;
    }
} this property only work when screen size(width) is 400px

@media (max-width:400px) {
    #box{
        background-color: aqua;
        height: 100px;
        width: 100%;
        border-radius: 25%;
    }
}
if you use max width in this then below all property work maximum till 300px and below it all property work

@media (orientation:portrait) {
    #box{
        background-color: aqua;
        height: 100px;
        width: 100%;
        border-radius: 25%;
    }
}it change according to orientation like landscape and portrait

you can also apply two media queries simultaneously and it work when that condition trigger

also you can add two property to bound it
@media (min-width:300px) and (max-width:400px) {
    #box{
        background-color: aqua;
        height: 100px;
        width: 100%;
        border-radius: 25%;
    }
}
in media queries at place of screen we used to write condition there


<!-- Animation -->
animation is journey between initial and final position enhace ux of a website

ui:is space which user see and interact
ux:user experience how easily a user use your website and how easily it can nevigate

for animation
@keyframe name{
    from{
        left:0;
    }
    to{
        left:60%;
    }
}
applying an animation
position: absolute;
    animation: dora;
    animation-duration: 5s;
    animation-delay: 1s;
after running an animation it come to its intial position automaticlally
animation-fill-mode:forward; stop at final position

for no of time to run
animation-iteration-count:infinite;
animation-iteration-count:3;

for direction:
animation-direction:alternate/reverse/alternate-reverse;

animation timing func:
animation-timing-function:ease-in;starting slow ending fast
animation-timing-function:ease-out;starting fast ending slow
animation-timing-function:ease-in-out;satrting and ending slow in between fast
animation-timing-function:linear; const speed

cubic-bezier: for making of animation-time function

h4{
    padding: 15px;
    background-color: aqua;
    font-size: 20px;

animation: marqtag;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes marqtag {
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
}
marqtag:looking infinite but actually not only shifting of element happens
in order to make it different if names are not same now we move complete div not moving element of it