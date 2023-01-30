const atags= document.querySelectorAll('a');
atags.forEach((e)=>{
    // e.innerText.includes("2.0");
    if(e.innerText.includes("2.0")){
        e.remove();
    }
})