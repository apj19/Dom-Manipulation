

const aside= document.querySelector('aside');

aside.addEventListener('mouseover',(e)=>{
    aside.style.overflowY="scroll";
})

const body= document.querySelector('body');
body.style.backgroundImage="none";


const btn= document.querySelector('.navbar-toggler');
const nav=document.querySelector('.collapse');
btn.addEventListener('click', (e)=>{
    if(nav.style.display== "block"){
        nav.style.display="none";
    }else{
        nav.style.display="block";
    }
    
});