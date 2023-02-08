import {countries} from "../data/countries.js";


// console.log(countries);

const data=countries.map(e=>e.toUpperCase());

const main= document.querySelector('main');
const input= document.getElementById('input');

data.forEach((e) => {
    let p=document.createElement('p');
    p.innerText=`${e}`;
    main.appendChild(p);
});

input.addEventListener('input',(e)=>{
    
    // while(main.hasChildNodes()){
    //     main.remove(main.firstChild);
    // });
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    // console.log(input.value);
    data.forEach((e)=>{
        
        if(e.startsWith(input.value.toUpperCase())){
            let p=document.createElement('p');
            p.innerText=`${e}`;
            main.appendChild(p);
        }

    });
})