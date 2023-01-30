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
