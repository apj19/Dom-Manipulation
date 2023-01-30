// const title= document.querySelectorAll('.title');
//  title[1].style.color="red";


const btn= document.querySelector('.add-to-cart');
btn.addEventListener('mouseover',(e)=>{
    btn.style.background="red";
});

btn.addEventListener('mouseleave',(e)=>{
    btn.style.background="#3c8067";
});