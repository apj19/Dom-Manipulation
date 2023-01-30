// const atags= document.querySelectorAll('a');
// atags.forEach((e)=>{
//     // e.innerText.includes("2.0");
//     if(e.innerText.includes("2.0")){
//         e.remove();
//     }
// });


let remove=localStorage.getItem('remove');

if(remove == null){
    // localStorage.setItem('remove','true');
    remove='true';
}

// if(remove =="false"){
//     remove='true'
// }

// let remove=true;
if(remove =="true"){
const atags= document.querySelectorAll('a');
atags.forEach((e)=>{
    // e.innerText.includes("2.0");
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