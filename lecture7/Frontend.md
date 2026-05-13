<!-- Responsive css -->
what and why??
your website get response with respect to your device
your website get look good with respect your devices like mobile and tablet etc

because it is very important for creating trafics on your websites

Units:
px:screen have small bulbs and it is equal to that small bulb only.it is fixed for a particular screen like 4k have more no of bulbs in one pixels that why it have good quality.no matter what your screen size  is it is fixed
%:it is dependent on parent height and width
child apen parent ke hisab se width lega
agar parent ke pas height and width nahi hai chaiye child ko height width jitna bhi de do wo child nahi lega

block element: heading tags,p,div
ye full screen ki width lete hai
full line ki space lete hai
width:fit-content;width block element fit according to content of block element
ye dusre ko height width adjust karne ke bad bhi same line me nahi aane dete hai
it have some importance:
ye bas height chate hai puri width le lega automatically agar bas app ne height di hai
all transform property work on this only
transform:rotate(5deg);
transform:translate(-50% -50%);

inline element:anchor tag,span tag
ye content ke barabar ki space lete hai according to content width
yaha agar space hai toh same line me aa shakte hai
yaha transform property work nahi karte hai
does not need height width they will not work

inline block element:you can create any element as inline block
display:inline-block;
all property of both inline block work here
all transform height width work

vw:(view port width)  you talk with respect to width of your screen
if you use child bypass its parent and go with respect to your screen size

vh(view port height):depends on screen height like vw
pure screen ke width ke hisab se lega ghate ga badhega usi ke hisab se
agar vh ke jagah or viceversa doge tab bhi work karega lekin height width ke hiasb se adjust hoga vw:width wise vh:height wise
font size pe bhi work karega height width adjust hogi screen ke hisab se wrap nahi hoga
vw and vh work relative to the screen size
issue:it get very small landscape device have more width and portrait device have more height
landscape:vw have maximum power
portrait:vh have maximum power

inorder to elminate this 
vmax(view port maximum):jabtak width jayada hai tab tak width(vw) ke according bat karega lekin jab height jayada hojaygi tab height(vh) pe depend karega
vmin(view port minimum):viceversa of vmin

<!-- skelton ui layout:load first if internet speed is slow -->

em:parent ke size ke hisab se lega
2em:matlab parent ke same property ka dugna
element work accordingly relatively to parent
mainly see on fontsize/padding of child having em like property
use:change in parent reflects on child
em nam ki value parent ke font size pe depend karti hai

ch:depends on character width
ex is character height
width: 50ch;50 character aa shakte hai

rem:depend on root
1rem=16px;hardcoded you can change it also

<!-- min -->
min-height:100%;minimum height will be 100%
kam se kam 100% to hogi jayada se jayada kitna bhi ho shakti hai
max-width same work with display:inline-block; element
both work best in pixels 
it can exceed above limit but not below the specified limit of height

<!-- max -->
max-height:jayada se jayada itna hi ho shakta hai child height jayda hui toh bhar chala jayega bina koi control ke
max-width same work with display:inline-block; element
jayada se jayada 100% lekin kam se kam kitna bhi ho shakta hai
limit se kam ho shakta hai hai lekin limit cross nahi karega

<!-- clamp -->
clamp:it is a property you can give what is the maximum,minimum of the element and preferred
e.g:font-size:clamp(min preferred max);

whitespace:nowrap;your text not get wrap when screen size get small

ctrl+enter:semicolon not come down with enter