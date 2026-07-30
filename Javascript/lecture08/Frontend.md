how exactly things work in javascript??
today video is most important for interview purpose
what is javascript and how it works??
javascript is a single threaded(no parallel execution) synchronous programmin language
execution code:environment where javascript all code gets run.imagine like a container have pre defined function variable which led the code to run
Global execution context(GEC):it is palce where your javascript program get run
two phases of GEC:
|-->memory creation phase:memory gets created in this(first it happen) ,memory me space milta hai ex:decleration of variable
|-->Code execution phase:memory banne ke bad code execute hoga
javascript code ko run karne ke sath hi global execution context aata hai
sabse pahle memory alot hoga bad me execution hota hai

single threded ka matlab hai ek time pe ek hi cheez ho raha hai
aur sari cheeze sync hoke chal rahi hai

java script async bhi behave karta hai multiple cheeze eke time pe hogi(browser)
java script internally sync kam karti hai

the default value get store while decleration is undefined in variable

jab function run hota hai tab function execution context banta hai iske bhi do phase hota hai
|-->memory creation phase
|-->code execution phase

itni sari complicated code ko run karne pe ham callstack ka use karte hai
stack-lifo queue-fifo
callstack:help to run code firstly it have GEC(global execution context) then FEC(function execution context)

var(ki initial value undefined hota hai) ke memory creation me jane ke bad (remember line by line hota hai) function ki puri body memory creation me chali jayegi

stack me pahle GEC then function aayege execute hoge phir lifo ke hisab se bahar jayegi fir gec execute hoga
GEC:null return karta hai
har ek function ka function exectution context banega aur nested according when code run during code execution phase

hw:do research on this topic make detailed documentation on this


Hosting:you can write execution first then create variable then variable toh print hoga lekin value undefined hogi .

var ke through jab app variable banate hai tab
let ke stah dikkat hai ki value kuch bhi nahi milegi jab app console pe code execution phase me bhejoge toh woh variable temporal dead zone me chala jayga
temporal dead zone:is the area in which variable is dead for the certain period of time
let and const me hosting perform hota hai lekin variable temporal dead zone me fas jata hai agar console pe pahle print karne ke bad define karte ho tab aisa hota hai

let and const hosted but not initialized

lexial environment:the environment in which you know the variable understand it and do work with that whe ever required ,variable apan parent ke scope ko access kar pa raha hai
inner function bahar ke function ke variable ko access kar lega

stack overflow:if function get pushed without being poped then it  will leads to stack overflow like happens in recursion

Scope:the region of code where a variable is accessiable
var function scoped:agar function ke andar define hai toh bahar function ke bahar access nahi hoga
let and const:block scoped ek block me hi hota hai {iske andar define hai toh iske bahar access nahi hoga}

//name ek reserve keyword hota hai
agar var aur let GEC me bane hai toh pure code me access ho shakta hai

lexical scope:inheritance ko yad karo parent ke variable ko child access kar shakta hai issi access ko ham lexicl scope kahte hai.child ke liye parent ki sari cheeze lexical scope hota hai
lexical environment:aur child ke function plus parent ke variable ko lexical environment kahege jo parent ki value ko access karega
aur hai inheritance wale concept ko scope channing kahte hai parent ke element ko child then child ke element ko grand child access kar shakte hai yahi scope channing hai sab cheeze ek dusre se connected ho gayi hai aur ye channing gec tak hota hai
closures:function along with its lexical environment
ex:
function parent(){
    var user='ramesh'
    function child(){
        var childname='ankit'
        console.log('parent:',user);
        console.log('Child:',childname);
   
    }
    return child
}

var out=parent()
out()

javascript hai jit(just in time compiler) ek interpreter(ininition) compiler(turbofan)hai line by line run + kuch compile time me bhi run hota hai

code firstly break down into tokens-->Parsing-->AST(abstract syntax tree)-->compilation-->execution this is the life cycle of code from definition to execution of code.

function along with lexical environment is closure
function remembers it lexical scope called closure
