# Assignment Solution

## 1. 
```javascript

```
## 2.
```javascript

``` 
## 3. 
```javascript

```
## 4. 
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
## 5. 
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
## 6. 
![](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)


```javascript
// Adding Ineuron logio
const headerLogo= document.querySelector('header').firstChild;
headerLogo.src="./assets/ineuron-logo.png";
```
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
## 7. 
```javascript

```
## 8. 
```javascript

```
## 9. 
```javascript

```