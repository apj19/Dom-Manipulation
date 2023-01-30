


// Task-1
// let accordian = document.querySelectorAll(".accordian h3");
// accordian.forEach((element) => {
//   element.addEventListener("click", () => {
//     let para = element.nextElementSibling;
//     if (para.style.display === "block") {
//       para.style.display = "none";
//     } else {
//       para.style.display = "block";
//     }
//   });
// });

// accordian.forEach((e)=>{
//   e.style.background ="#dadaf8";
  
// })



//A2_Task-2

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

