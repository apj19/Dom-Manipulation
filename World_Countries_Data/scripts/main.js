import { countries_data  } from "../data/countries_data.js";

const main= document.querySelector('main');
const populationbtn= document.getElementById('population');
const languageBtn= document.getElementById('LANGUAGES');



//sorting data as per population
countries_data.sort((a,b)=>{
    return  b.population - a.population;
});

//Top 10 populated countries
// for (let i = 0; i < 10; i++) {
//     let p=document.createElement('p');
//     p.innerText=`${countries_data[i].name} : ${countries_data[i].population}`;
//     main.appendChild(p);
   
// }

{/* <div class="flex gap-2 w-[80%] mb-4">
		<p>China</p>
		<div class="h-[30px] w-[100%] border rounded rounded-[15px] bg-[whitesmoke] ">

			<div class="h-[100%] w-[80%]
			bg-gradient-to-r from-purple-500 to-pink-500 rounded-[20px]">
	
			</div>
		</div>
		<p>14021111</p>
	</div> */}

function addPopulation(country,population,maxPopulation){

    let currentPopulation= Math.floor((population/maxPopulation)*100);
    console.log(currentPopulation);

    let maindiv= document.createElement('div');
    maindiv.className="grid grid-cols-2  md:grid-cols-5 gap-2 w-[100%] mb-4";

    let p=document.createElement('p');
    p.innerText=`${country}`;
    // p.className="w-[4rem]"
    maindiv.appendChild(p);

    let bardiv=document.createElement('div');
    bardiv.className="h-[30px] w-[100%] border rounded col-span-3 rounded-[15px] bg-[whitesmoke] hidden  md:block md:col-span-3";
    let progressdiv=document.createElement('div');
    progressdiv.className=`h-[100%] w-[${currentPopulation}%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-[20px]`;
    bardiv.appendChild(progressdiv);
    maindiv.appendChild(bardiv);

    let p2=document.createElement('p');
    p2.innerText=`${population}`;
    maindiv.appendChild(p2);

    return maindiv;

}

const maxPopulation=countries_data[0].population;



populationbtn.addEventListener('click',()=>{

    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }

    for (let i = 0; i < 10; i++) {
        let newdiv= addPopulation(countries_data[i].name, countries_data[i].population, maxPopulation)
        // let p=document.createElement('p');
        // p.innerText=`${countries_data[i].name} : ${countries_data[i].population}`;
        main.appendChild(newdiv);
       
    }

    

});









//collection all languages
let lang=[];
for (const key in countries_data) { 
    lang=lang.concat(countries_data[key].languages);
    
    
}

const counts = {};
lang.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

//sorting objects accounting to most languages
let sortedLanguageList=Object.entries(counts).sort((a,b) => b[1]-a[1]);


//top 10 languages
for (let j = 0; j < 10; j++) {
    let p=document.createElement('p');
    p.innerText=`${sortedLanguageList[j][0]} : ${sortedLanguageList[j][1]}`;
    
}
