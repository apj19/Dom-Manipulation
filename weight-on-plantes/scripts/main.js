
const plantes=
{
    earth: 9.8,
    jupiter:26,mars:3.75,mercury:3.61,
    moon:1.62,neptune:13.3,pluto:0.61,saturn:11.2,uranus:10.5,venus:8.83
};

const dropdown=document.querySelector('select');
const img=document.querySelector('.default-img');
const input=document.querySelector('input');
const btn=document.querySelector('button');
const result=document.querySelector('.resultdiv');


for (const k in plantes) {  
    const key= k;
    let opt= document.createElement('option');
    opt.text=key;
    opt.value=key;
    dropdown.appendChild(opt);
}
const showmsg=document.querySelector('p');

dropdown.addEventListener('change', (e)=>{
   let x=dropdown.value;
   if(x=='none'){
    img.src="./images/earth.png";

    if(img.classList.contains('hidden')){
        img.classList.remove('hidden');
        showmsg.classList.add('hidden');
    }
    
   }else{
    img.src=`./images/${x}.png`;
    
    if(img.classList.contains('hidden')){
        img.classList.remove('hidden');
        
    }
    showmsg.classList.add('hidden');
   }   
});

const correctresult=document.querySelector('.correct-result');
const falseresult=document.querySelector('.false-result');



const resultimg=document.querySelector('.result-img');

// console.log(resultimg);







btn.addEventListener('click',()=>{
    let x=dropdown.value;
    let mass= input.value;
    
    if(x == 'none' || mass== '' ){
        console.log("Please enter mass or Select Planet");
        
        
        if(correctresult.classList.contains('hidden')){
            img.classList.add('hidden');
            falseresult.innerText="Please enter mass and Select Planet";
            falseresult.classList.remove('hidden');
        }else{
            correctresult.classList.add('hidden');
            img.classList.add('hidden');
            falseresult.innerText="Please enter mass and Select Planet";
            falseresult.classList.remove('hidden');
        }
        
        
        

    }else{
        let weight= Math.round(plantes[x] * parseInt(mass)) ;
    
        console.log(weight);
        let showMessage=`The weight of object on ${x.toUpperCase()}
        is ${weight} N`;

        if(falseresult.classList.contains('hidden')){

            // img.classList.add('hidden');

            // resultimg.src=`./images/${x}.png`;
            // console.log(resultimg);
            if(showmsg.classList.contains('hidden')){
                showmsg.classList.remove('hidden');
            }
            showmsg.innerText=showMessage;

            correctresult.classList.remove('hidden');
        }else{
            falseresult.classList.add('hidden');
            if(showmsg.classList.contains('hidden') && img.classList.contains('hidden')){
                showmsg.classList.remove('hidden');
                img.classList.remove('hidden');
            }
            showmsg.innerText=showMessage;

            correctresult.classList.remove('hidden');
        }
        


        // calculatedWeight.innerText=showMessage;
        // correctresult.appendChild(calculatedWeight);

        // result.removeChild(falseresult);
        // result.appendChild(correctresult);


        

    }
    
})


