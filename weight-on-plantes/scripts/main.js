
const plantes=
{
    earth: 9.8,
    jupiter:26,mars:3.75,mercury:3.61,
    moon:1.62,neptune:13.3,pluto:0.61,saturn:11.2,uranus:10.5,venus:8.83};

// console.log(plantes);

const dropdown=document.querySelector('select');
const img=document.querySelector('img');
const input=document.querySelector('input');
const btn=document.querySelector('button');
// // console.log(img);

// // console.log(dropdown);
// // let opt= document.createElement('option');
// // opt.text="AKshay";
// // dropdown.appendChild(opt);
// // console.log(opt);

for (const k in plantes) {
   
    const key= k;
    let opt= document.createElement('option');
    opt.text=key;
    opt.value=key;
    dropdown.appendChild(opt);
}

dropdown.addEventListener('change', (e)=>{
   let x=dropdown.value;
   if(x=='none'){
    img.src="./images/earth.png";
   }else{
    img.src=`./images/${x}.png`;
   }   
});

btn.addEventListener('click',()=>{
    let x=dropdown.value;
    let mass= input.value;
    // console.log(mass);
    if(x== 'none'){
        console.log("Please Select Plnet");
    }else if(mass== NaN){
        console.log("Please Enter mass");
    }else{
    let weight= Math.round(plantes[x] * parseInt(mass)) ;
    
    console.log(weight);

    }
    
})


