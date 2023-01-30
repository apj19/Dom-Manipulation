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

// Task-2