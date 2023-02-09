# very Important Notes every FrontEnd Dev will need 



> depending on you one property's value we have different rules of css

## display:
block : it's gonna take all the space of its container it's gonna take a height of the content within it and gonna break to a new  line in respect its width and height properties  
inline :  is going to just be the width and height  of the content within it it's  not gonna break to a new line  and it's also not gonna to respect the width and height properties  if we try to set them ]  
inline-block : kind of adopt sa couple attributes of both so main different  if we change inline to inline block it's go respect the geight and width properties \(| its taking all the properties of inlie but instead of ignoring  width and height its now respect thse properties  )  

---
## boxModel :keep on the top of your mind 
 :first off the box model describes how much space an html element occupies 
 the space is heavily influenced by that  box sizing property that  we just talked about whether that's contentBox or borderBox 

the contentBox: we have to add the  content  width and height to the padding  in  the border 
well with the 
borderBox : you just take the height and the width  and that it is the total space that your html elemetn occupies  
 

 Boxsizing and display will play  together an important rule to decide how our webPage  is laid out  
margin soesn't play into the total space it occupies but it does control  the space around it 





margin doesn't do any thing when display is inline
---
## POSITION PROPERTY :::::

fixed : the property will be very handy when we have to layout things on the page like (navbars) will  at top of the page rather then scrolling down  when we have content that exceed  the total hight of view port 
!! it's going to take element and remove it from teh flow of the document and take up zero  space and it's gonna be positioned relative to the viewport  which  always gonna be the edges of the  browser window 
static : the default value  
ralative and absolute in Fundemantels /nav.html

---
## Css unites  :

- rem and em kinda  the more prefferred way to define text sizes  with in a web page
what we generally see html (root) elements { font-size = 16px } it self from there  we'll define elemenrts below that  root element in relation to that 16px  so we say on any element font-size:1 rem; that's mean 100% of the size  of the text of the root element or rem 
- em: mean its relative to it's parent element  
the benefit of this that you can defined it one time  then everything else is relative to that  so if you noticed that font size is small instead of change all css rules you can change one of it which is the root font-size and everything gonaa be alright 
- vw: viewport width
- vh:viewport height 
---
## Systematic way to write css+html:
four step method  when we writing html and css 


1. figure out what you want  to put on the page (often times that comes in the form  of design (wireframming and graphic design ))   once you have the dedsign   
2. how do i want to arrange those on the page  with html ?? now this highly intutive step you're  gonna be a lot better at this  with experience  and it's much easier after you've written a couple  of apps    
3. how can i use css to achieve the layout i have imagined  ? you'llget a lot better with practice on this one   
4. how should each element by styled (adhere.rahter trivial ## bunu cevir )  
---
Responsive :
our goals as web develpers are avoid our users hurting their eyes after 
 they look at out web application  on a desktop or table or mobile
  wahtever  they're viewing it on  

### what's responsive design :  if your user hurt her eyes looking to your
web site whatever they're viewing on  then you don't have not design it 
responsibly 

> the text in our website should be generally less then 700 px   it needs to be in the middle of 
  the screen  it should be narrow  enough to your eyes to not 
  basically move  great distances to read it  that one piece of it 
  we just saw in the responsive design  that text and otherthings shouldn't be have a great distance between each other and in generl should be at max 700 px
  
  
the navbar is very spaced out  there is couple issue gonna on with this badWebSite example 
if we make this narrow  we gonna see somethig gonna hurts our eyes (which is text going to be unreadable )
which is not the point  of resposive design  and we will notice that 
some of the liknks on the navbar  almost  getting cut off to the 
point where you can't  even click or see it any more (it should be a navigation menu when screen be smaller )

//translate : skim 

## Responsive : 
mobile desktop first design  
it really important to separate the design phase from  the coding phase 
of a project  

important Note :: keep it back on your head |"before write any code  whatsoever  you should to have at least  a basic visual representation of what you're trying to create  
medicore designer =does'nt have desing skills yet  


we have three option when it comes
 to know getting that first visual representation of your web
 page infront of you 
 1. hire a designer and have them design it for you  but in most cases  you don't have time to figure out what designer  you wanna hire and you don't wanna to pay to any one to know how to code so that is out of the equation |that later down in the road that when we need to build and sell an product and we need to have a really professional design web
 2. browse the internet for free designs  and that what we gonna to do 
 figma is place to put together wire frame or even a    
 ### mock-up :  which a complete representaion of what we  wanna a build 
 ### wirefram : is to just  get a general  idea of where the elemnts that i have  on our page should be arranged based on the size of the screen 
 the wireframe doesn't care about colors fonts  all that details is just care about the layout of  the elements on the page 
 when mock-up : full-on representaion of what you're trying to build  so tools (like : figma ,adobe xd ,sketch ) can allow you to create full-on mock-ups  
 
 //we have so design of both desk and mob and it doesn't matter which one you create first 


 ### What is the difference between desktop first and mobile first  design ???
the answer of that is you asking the wrong question 
mobile first and desk first has nothing to do  with the actuall design phase 
 it has every thing to do with when you start writing that css 
  and when you put together your breakpoints 



breakpoints : if we said we wanna a break point at 600px .
 what we mean by that as the screen  gets 
 smaller or bigger than a width of  600 px
   i wanna have different CSS rules 


   Innerwidth : is the visible width of the screen 


which screens do we want to set our breakpoints on  and design 
it little bit differently :
in general mobile devices some where in the range  320 to 480 wide 
           table some where in the range 600 to 800 
            regular size laptops  1024 1440
             bigger desktop devices width of 2500 
             those  just generalations 








 translate :incorporate
            cluncky
            squinting



### 3 Questions for deciding BreakPoints :
3) as you decided what the break points you need to use for  your web page you have to ask three question 
  1. will this webpage be used on a mobile devices often?   |  so if yor're creating some thing  and you plan to make a mobile  application  you may not have to put quite as much  time and thought into how it looks o on different screens     
  2. is  it actually important to have a different design for each screen | if you've just got a  basic website that just have a text on it  and you don't have alot of images  or any thing like that  ,then  it maynot be that important  to have a bunch of breakpoints  you may be abl to get away with one design  for all devices  and will work just fine    
  3. are there standartds  for this breakpoints ? no but  having a framework   to piggyback off  of when it comes to breakpoints is very smart  decision 
 

 // bootstrap  is mobile first : it means we first designing our css for mobile then  what're saying is any thing greater than 576 pixels  we have this styles and any thig greater than 768  wil these different styles and go on so basically we started  with mobile we writing css and then writing little blocks of code with these break points  to define what happen when we have a bigger device so that's kinda what we mean when we say mobile first 
//we'll use this standards  but we don't  need to use every single breakPoint  here  we just need to use enough breakpoints  to make our design look suitable  on all device  and based on what you're creating that may be   one or two breakpoints or it may be all  of these  standard web points 




### Responsive check list 
this what we gonna through  when we lookin to our design 
 and webPage and testing it  on defferent devices we 
 want to make sure that we check all of  this boxes
  and if we can check all this boxes  we've covered 98% 
  of  what we need to and the rest  gonaa be subtle little
   changes  and highly dependent on how many requirements 
    we have for our project
 1. fluid layouts : make content look good in general 
 2. images :  we need to make sure that we have the right aspects ratios  and we're not stretching images  to be too wide too tall  or to big on certain devices 
 3. text: we don't want to have a huge text on mob devices  where we only  have a 4 ,5 words per line  that's really poor User experience 
 4. overFlow : you don't want to have any text or img or  whatever cut of  on side of the screen  
 5. full width mobile content : in general  this doesn't apply to every thing but "in general  every thing that you look at is going to be stacked  on each other rather than having columns  you don't want columns on mobile device  

 6.general usability : just get friend some one who  give us honest feedBack  have them play around with your webpage on multiple devices  


## Css Important Notes (mobile&desktop )first responsive Design 
1. css is read from top to bottom so we should be aware order of our property   
2. our media query should be at the bottom  of css style sheet  and if we use 
    1. mobile first approach whih using min width   then we need the greatest width  to be at the bottom  smallest to largest from top to bottom 
    2. if we desktop first approach which is ***not recommend***  but is use max with and the smaller  width at the bottom  largest to smallest from the top to bottom  
3. the only thing you have to alter between breakpoints is gonna be layout-related properties 

>    in general we can find that the consensus   among the development comunity  
     is to use a mobile first  approach and the reason  behind it is you're  getting 
     to more complex design  and  it's just easier to  the natural flow of html on the mobile
      devices so no media queries required and then tweak  it as you get larger
    and in many cases the disktop first approach its not gonna look  very good on mobile devices
    but inverse of that the mobile first design  it will probably look
  okay  on the desktop device with out any modifications  so in summary you gonna write less code on most cases */





when we click inspect and looking for lists we will notice  there is some padding and margin  around list by default

















