import { countries_data  } from "../data/countries_data.js";

console.log(countries_data[0]);
const maindata=countries_data;
const currentdata=[];
const main=document.querySelector('main');
const graphsection=document.getElementById('graphsection');
const search=document.getElementById('search');

const initaldata=countries_data; 
///cfunction for showing countries card


function addCountry(imglink,capital,population,language,name){

    let maindiv=document.createElement('div');
    maindiv.className="py-4 w-40 h-56  border bg-[#ffff]";

    let img=document.createElement('img');
    img.src=`${imglink}`;
    img.className="px-8 mb-2";
    maindiv.appendChild(img);

    let h3=document.createElement('h3');
    h3.className="text-center mb-2 text-[#C92C6D]";
    h3.innerText=name;
    maindiv.appendChild(h3);

    let capitalp=document.createElement('p');
    capitalp.className="px-4 text-[0.8rem]";
    capitalp.innerText=`Capital:- ${capital}`;
    maindiv.appendChild(capitalp);

    let populationp=document.createElement('p');
    populationp.className="px-4 text-[0.8rem]";
    populationp.innerText=`Population:- ${population}`;
    maindiv.appendChild(populationp);

    let lang=document.createElement('p');
    lang.className="px-4 text-[0.8rem]";
    let langtext='Langues:- ';
    language.forEach(e => {

        langtext=langtext+e+',';
    });
    lang.innerText=langtext;

    maindiv.appendChild(lang);

    return maindiv;


}



function refreshmain(data){

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    data.forEach((e)=>{
        let card=addCountry(e.flag,e.capital,e.population,e.languages,e.name)
        main.appendChild(card);
    });

    
}

refreshmain(maindata);

initaldata.sort((a,b)=>{
    return  b.population - a.population;
});
//calculating maxpopulation
let populationArray=[];
for (const key in initaldata) { 
    populationArray=populationArray.concat(initaldata[key].population);
       
}
const maxPopulation= populationArray.reduce((acc, current)=>{
    return acc+current;
},0);

function addPopulation(country,population,maxPopulation){

    let currentPopulation= Math.floor((population/maxPopulation)*100);
   

    let maindiv= document.createElement('div');
    maindiv.className="grid grid-cols-2  md:grid-cols-5 gap-2 w-[100%] mb-4 border-b ";

    let p=document.createElement('p');
    p.innerText=`${country}`;
    // p.className="w-[4rem]"
    maindiv.appendChild(p);

    let bardiv=document.createElement('div');
    bardiv.className="h-[30px] w-[100%] border rounded col-span-3  bg-[whitesmoke] hidden  md:block md:col-span-3";
    let progressdiv=document.createElement('div');
    progressdiv.className=`h-[100%] w-[${currentPopulation}%] bg-gradient-to-r from-purple-500 to-pink-500 `;
    bardiv.appendChild(progressdiv);
    maindiv.appendChild(bardiv);

    let p2=document.createElement('p');
    p2.innerText=`${population}`;
    maindiv.appendChild(p2);

    return maindiv;

}

let worldtotal=addPopulation('World',maxPopulation,maxPopulation);
graphsection.appendChild(worldtotal);

for (let i = 0; i < 10; i++) {
    let newdiv= addPopulation(initaldata[i].name, initaldata[i].population, maxPopulation)
    graphsection.appendChild(newdiv);
       
}

///adding search functionality

search.addEventListener('input',()=>{
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    
    
    maindata.forEach((e)=>{
        currentdata=[];
        if(e.name.toUpperCase().startsWith(search.value.toUpperCase() )){
            currentdata.push(e);
            
            let card=addCountry(e.flag,e.capital,e.population,e.languages,e.name)
            main.appendChild(card);
            // count=count+1;
            
        }
    });


});