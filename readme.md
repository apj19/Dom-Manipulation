# Assignment Solution

## 1. Task-1
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)
```javascript
const li= document.querySelectorAll('ul>li');
const ul= document.querySelector('ul');
let remove=li[2];
ul.removeChild(remove);
let newli= document.createElement('li');
newli.innerText="Projects";
ul.appendChild(newli);
let newli1 = document.createElement('li');
newli1.innerText="Hire Me";
ul.appendChild(newli1);
```
## Task-2
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)
```javascript
const li= document.querySelectorAll('ul>li');
const ul= document.querySelector('ul');
let remove=li[2];
ul.removeChild(remove);
let newli= document.createElement('li');
newli.innerText="Projects";
ul.appendChild(newli);
const input= document.querySelector('input');
input.placeholder="Search My Project";

```
## Task-3
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)
```javascript
const li= document.querySelectorAll('ul>li');
const ul= document.querySelector('ul');
let remove=li[2];
ul.removeChild(remove);
let newli= document.createElement('li');
newli.innerText="Projects";
ul.appendChild(newli);

```
## Task-4
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)
```javascript
const img= document.querySelector('img')
img.src="https://th.bing.com/th/id/OIP.Zz0nVELryfmBS9strggNFgAAAA?pid=ImgDet&rs=1";

```
## Task-5
![](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)
```javascript
const maindiv= document.querySelector('.hero-right-section-btns');
const btn= document.createElement('button');
btn.innerText="Support Me";
 maindiv.appendChild(btn);

```
## 2. Task-1
![](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)
```javascript
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

accordian.forEach((e)=>{
  e.style.background ="#dadaf8";
  
})

```
## Task-2
![](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png) 
```javascript
const maincontainer=document.querySelector('.accordian-wrapper');

const div= document.createElement('div');
div.classList.add('accordian');

const h3=document.createElement('h3');
h3.innerText='skills';

const p= document.createElement('p');
p.innerText='I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.';

div.appendChild(h3);
div.appendChild(p);

maincontainer.appendChild(div);
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((e)=>{
  e.style.background ="#dadaf8";
  
})

accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

``` 
## 3.  Task-1
![](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png) 
```javascript
const form=document.querySelectorAll('form');

form.forEach((e)=>{
    e.firstElementChild.placeholder="FSJS 2.0";
});

const secondinput=document.querySelectorAll('form :nth-child(2)');

secondinput.forEach((e)=>{
    e.placeholder="fsjs@ineuron.ai"; 
});

const thirdinput=document.querySelectorAll('form :nth-child(3)');
thirdinput.forEach((e)=>{
    e.placeholder="Hello World"; 
});
```
## 4. Task-1
![](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)
```javascript
const mainContainer=document.querySelector('.slide-container');
mainContainer.style.flexWrap="nowrap";

const test=document.querySelectorAll('.no-border');
test.forEach((e)=>{
    e.style.color="#ffff"
});

const card=document.querySelectorAll('.clash-card__unit-stats');
console.log(card);
const color=['#ec9b3b','#ee5487','#f6901a','#82bb30','#4facff'];
card.forEach((e,i)=>{
    e.style.background=color[i];
    e.style.color="#ffff"
});
```
## 5.  Task-1
![](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

```javascript

//Adding button to nav
const btnParent=document.querySelector('.nav-center');
let atag=document.createElement('a');
atag.innerText="Pro Subscription";
atag.classList.add('btn');

btnParent.children[2].appendChild(atag);

//Adding chinese tag
const continer=document.querySelector('.tags-container');
const tagsParent=continer.children[1];
const chinesTag=document.createElement('a');
chinesTag.innerText="Chinese (7)";

tagsParent.appendChild(chinesTag);

// Adding card 6th duplicate card

const cardParent= document.querySelector('.recipe-gallery');
let card= cardParent.children[1];
let cardClone=card.cloneNode(true);

cardParent.appendChild(cardClone);

```
## 6.  Task-1
![](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)


```javascript
// Adding Ineuron logio
const headerLogo= document.querySelector('header').firstChild;
headerLogo.src="./assets/ineuron-logo.png";
```
## Task-2
![](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)

```javascript
//Add $10
const price=document.querySelector('.app_price');
price.children[0].innerText="$10";

//Adding Logo

const logoParent= document.querySelector('.footer_social');

const div= document.createElement('div');

div.classList.add('footer_social_ico');
div.innerHTML='<i class="fa-brands fa-linkedin"></i>';

logoParent.appendChild(div);

```
## 7. Task-1
![](./DOM%20P7/DOM%20P7/ass7.1-after.png) 
```javascript
const atags= document.querySelectorAll('a');
atags.forEach((e)=>{
    // e.innerText.includes("2.0");
    if(e.innerText.includes("2.0")){
        e.remove();
    }
});


```
## Task-2
![](./DOM%20P7/DOM%20P7/ass7.2-after.png) 
```javascript
let remove=localStorage.getItem('remove');

if(remove == null){
    localStorage.setItem('remove','true');
    remove='true';
}

if(remove =="true"){
const atags= document.querySelectorAll('a');
atags.forEach((e)=>{
    if(e.innerText.includes("2.0")){
        e.remove();
    }
});  
}
const input= document.querySelector('.main__form-input');
input.value="ineuron";
const btn=document.querySelector('.main__form-btn');
btn.disabled=false;

btn.addEventListener('click',function(e){
    localStorage.setItem('remove','false');
    
})


```
## 8.  Task-1
![](./DOM%20P8/DOM%20P8/ass8.1-after.png) 
```javascript
const aside= document.querySelector('aside');
aside.addEventListener('mouseover',(e)=>{
    aside.style.overflowY="scroll";
})
```
## Task-2
![](./DOM%20P8/DOM%20P8/ass8.2-after.png) 
```javascript
const body= document.querySelector('body');
body.style.backgroundImage="none";

```
## Task-3
![](./DOM%20P8/DOM%20P8/ass8.3-after.png) 
```javascript
const btn= document.querySelector('.navbar-toggler');
const nav=document.querySelector('.collapse');
btn.addEventListener('click', (e)=>{
    if(nav.style.display== "block"){
        nav.style.display="none";
    }else{
        nav.style.display="block";
    }
    
});

```
## 9.  Task-1
![](./DOM%20P9/DOM%20P9/ass9.1-after.png) 
```javascript
const title= document.querySelectorAll('.title');
 title[1].style.color="red";

```
## Task-2
![](./DOM%20P9/DOM%20P9/ass9.2-after.png) 
```javascript
const btn= document.querySelector('.add-to-cart');
btn.addEventListener('mouseover',(e)=>{
    btn.style.background="red";
});

btn.addEventListener('mouseleave',(e)=>{
    btn.style.background="#3c8067";
});

```