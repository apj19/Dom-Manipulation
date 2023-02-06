
const plantes=
{
    earth: 9.8,
    jupiter:26,mars:3.75,mercury:3.61,
    moon:1.62,neptune:13.3,pluto:0.61,saturn:11.2,uranus:10.5,venus:8.83
};

const dropdown=document.querySelector('select');
// const img=document.querySelector('.default-img');
const input=document.querySelector('input');
const btn=document.querySelector('button');

const main= document.querySelector('main');


//creating talwind classs

///create image

function createImage(planet){
  const img1=document.createElement('img');
  img1.src=`./images/${planet}.png`;
  img1.className='h-[150px] lg:h-[250px]';
  return img1;   
}


for (const k in plantes) {  
    const key= k;
    let opt= document.createElement('option');
    opt.text=key;
    opt.value=key;
    dropdown.appendChild(opt);
}


if(main.hasChildNodes()){
    // const img1=document.createElement('img');
    // img1.src="./images/earth.png";
    const img=createImage('earth');
    main.appendChild(img); 
    
}

dropdown.addEventListener('change', (e)=>{
   let x=dropdown.value;
   while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }

  const img1=createImage('earth');


   if(x=='none'){
    img1.src="./images/earth.png"; 
   }else{
    img1.src=`./images/${x}.png`;
   }
   main.appendChild(img1);
   
    
       
});


btn.addEventListener('click',()=>{
    let x=dropdown.value;
    let mass= input.value;
    
    if(x == 'none' || mass== '' ){
        console.log("Please enter mass or Select Planet"); 
        
        // removing all child elements
          while (main.hasChildNodes()) {
            main.removeChild(main.firstChild);
          }

        let falseresult=document.createElement('div');
        falseresult.innerText="Please enter mass and Select Planet";
        falseresult.className="border border-[red] p-4"
        main.appendChild(falseresult);

        
        
        
    }else{
        let weight= Math.round(plantes[x] * parseInt(mass)) ;
    
        console.log(weight);
        let showMessage=`The weight of object on ${x.toUpperCase()} `;
        
        while (main.hasChildNodes()) {
            main.removeChild(main.firstChild);
          }

        let trueresult=document.createElement('div');
        trueresult.className="flex flex-col justify-center items-center lg:flex-row gap-8 lg:text-[1.5rem]";
        let img=createImage(x);
        let div= document.createElement('div');
        div.className="flex flex-col justify-center items-center";
        let divwt=document.createElement('div');
        divwt.className="lg:h-[7rem] lg:w-[7rem] h-[4rem] w-[4rem]  rounded-[50%] bg-[#212121] flex flex-col justify-center items-center "
        divwt.innerText=` ${weight} N`;
        let p=document.createElement('p');
        p.innerText=showMessage;
        div.appendChild(p);
        div.appendChild(divwt);
        trueresult.appendChild(img);
        trueresult.appendChild(div);

        // trueresult.innerText=showMessage;
        main.appendChild(trueresult);
        
        
        
    }
    
})


