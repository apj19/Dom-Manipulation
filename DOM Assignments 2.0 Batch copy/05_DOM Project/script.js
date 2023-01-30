
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

