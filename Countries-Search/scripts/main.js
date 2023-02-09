import {countries} from "../data/countries.js";


// console.log(countries);

const data=countries.map(e=>e.toUpperCase());

const main= document.querySelector('main');
const input= document.getElementById('input');
const sort=document.getElementById('sort');
const searchWithStartWord=document.getElementById('startwithword');
const withWord=document.getElementById('searchwithword');
let count=0;
const message=document.getElementById('message');
// console.log(message);
// let inputEventMode=''

//function for showing countries
function countrycard(name){
    let p=document.createElement('p');
    p.className="border border-[#C92C6D] p-4 bg-[url(./images/cardbg.png)]  ";
    p.innerText=`${name}`;
    return p;
}

data.forEach((e) => {
    // let p=document.createElement('p');
    // p.className="border border-[#C92C6D] p-4 bg-[url(./images/cardbg.png)]  ";
    // p.innerText=`${e}`;
    // main.appendChild(p);
    let p=countrycard(e);
    main.appendChild(p);
});

///sorting

sort.addEventListener('click',()=>{
    input.value='';
    message.innerText=" ";
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    

    data.reverse();
    data.forEach((e) => {
        // let p=document.createElement('p');
        // p.innerText=`${e}`;
            let p=countrycard(e);
            main.appendChild(p);
    });

});
//making search with satarting as default
let dataSearchwithstart=true;
searchWithStartWord.classList.add('border');
////search
searchWithStartWord.addEventListener('click',()=>{
    if(searchWithStartWord.classList.contains('border')){

    }else{
        searchWithStartWord.classList.add('border');
        dataSearchwithstart=true;
        input.value='';
        withWord.classList.remove('border');
    }
});

withWord.addEventListener('click',()=>{
    if(withWord.classList.contains('border')){

    }else{
        withWord.classList.add('border');
        dataSearchwithstart=false;
        input.value='';
        searchWithStartWord.classList.remove('border');

    }
});







input.addEventListener('input',(e)=>{
    count=0;
    // while(main.hasChildNodes()){
    //     main.remove(main.firstChild);
    // });
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    // console.log(input.value);
    data.forEach((e)=>{
        
        if(dataSearchwithstart){
            if(e.startsWith(input.value.toUpperCase())){
                // let p=document.createElement('p');
                
                // p.innerText=`${e}`;
                // main.appendChild(p);
                let p=countrycard(e);
                main.appendChild(p);
                count=count+1;
                
            }

        }else{
            if(e.includes(input.value.toUpperCase())){
                // let p=document.createElement('p');
                // p.innerText=`${e}`;
                // main.appendChild(p);
                let p=countrycard(e);
                main.appendChild(p);
                count=count+1;
                

            }

        }

        

    });
    

    if(dataSearchwithstart){
        if(input.value==''){
            message.innerText='';
        }else{
        message.innerText=`Countries start with ${input.value.toUpperCase()} are ${count}`;

        }
        // console.log(message);

    }else{
        if(input.value==''){
            message.innerText='';
        }else{
            message.innerText=`Countries containing ${input.value.toUpperCase()} are ${count}`;
        }
    }
    // console.log(input.value);
});