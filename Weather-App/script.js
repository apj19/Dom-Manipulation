const url="https://api.weatherapi.com/v1/current.json?key=bd49ad5b728c4495bad110051231102";
const forcasturl="https://api.weatherapi.com/v1/forecast.json?key=bd49ad5b728c4495bad110051231102";
const astroUrl="https://api.weatherapi.com/v1/astronomy.json?key=bd49ad5b728c4495bad110051231102";


let jsondata;
const inputcity= document.getElementById('inputcity');
const searchcity= document.getElementById('searchcity');
const leftimg=document.getElementById('leftimg');
const temp=document.getElementById('temp');
const weekday=document.getElementById('weekday');
const currenttime=document.getElementById('currenttime');
const loader=document.getElementById('loader');
const weather= document.getElementById('weather');
const state=document.getElementById('state');
const country = document.getElementById('country');
const forcastcard= document.getElementById('forcastcard');
const uvindex= document.getElementById('uvindex');
const humidity= document.getElementById('humidity');
const wind= document.getElementById('wind');
const city= document.getElementById('city');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const error= document.getElementById('error');
const maincardmaxtemp= document.getElementById('maincardmaxtemp');


function getweekday(date){

    let currentweekday=new Date(date);
   const options = { weekday: "short" };
   return new Intl.DateTimeFormat("en-US", options).format(currentweekday);

}


function forcastCard(date,imgsrc,maxtempindegree,mintempindegree){


    let maindiv= document.createElement('div');
    maindiv.className=" w-[100%] px-8 rounded  grid  grid-cols-3 border-b  justify-around items-center  ";

    let day= document.createElement('p');
    day.innerText=getweekday(date);
    maindiv.appendChild(day);

    let img= document.createElement('img');
    img.className=" w-8 h-8 block"
    img.src=imgsrc;
    maindiv.appendChild(img);

    let temp= document.createElement('p');
    
    let maxtemp= document.createElement('span');
    maxtemp.className="after:content-['°c/']";
    maxtemp.innerText=maxtempindegree;
    temp.appendChild(maxtemp);

    let mintemp= document.createElement('span');
    mintemp.className="after:content-['°c'] opacity-50";
    mintemp.innerText=mintempindegree;
    temp.appendChild(mintemp);

    maindiv.appendChild(temp);

    return maindiv;

}


const getData = async (currentcity)=>{

    if(loader.classList.contains('hidden')){
        loader.classList.remove('hidden');
    }

    error.innerText="";
    let data= await fetch(`${url}&q=${currentcity}`);

    if(data.status != 200){
        error.innerText="City not found";
        currentcity="karad";
         data= await fetch(`${url}&q=${currentcity}`);
    }


    jsondata=await data.json();


 
 
// console.log(jsondata);
leftimg.src=jsondata.current.condition.icon;
temp.innerText=jsondata.current.temp_c;

//calculating week day
let currentweekday=new Date(jsondata.location.localtime);
// const options = { weekday: "long" };
// weekday.innerText=new Intl.DateTimeFormat("en-US", options).format(currentweekday);
weekday.innerText= getweekday(currentweekday);
currenttime.innerText=currentweekday.toLocaleTimeString();

city.innerText=jsondata.location.name;
weather.innerText=jsondata.current.condition.text;
state.innerText=jsondata.location.region;
country.innerText=jsondata.location.country;
uvindex.innerText=jsondata.current.uv;
humidity.innerText= jsondata.current.humidity;
wind.innerText= jsondata.current.wind_kph;



let astrodata= await fetch(`${astroUrl}&q=${currentcity}`);
let astrodatajson= await astrodata.json();

sunrise.innerText= astrodatajson.astronomy.astro.sunrise;
sunset.innerText= astrodatajson.astronomy.astro.sunset;



let forcastdata= await fetch(`${forcasturl}&q=${currentcity}&days=8`,{
    mode: 'cors'
});

let focastdatajson= await forcastdata.json();

loader.classList.add('hidden');
// console.log(focastdatajson.forecast.forecastday);

const forcastdstsarray=focastdatajson.forecast.forecastday;

maincardmaxtemp.innerText=forcastdstsarray[0].day.maxtemp_c;
maincardmintemp.innerText=forcastdstsarray[0].day.mintemp_c;
forcastdstsarray.forEach((e,i)=>{
    if(i==0){
        
    }else{
        let newcard= forcastCard(e.date,e.day.condition.icon,e.day.maxtemp_c,e.day.mintemp_c);
    forcastcard.appendChild(newcard);

    }
    
})


};

getData("karad");
searchcity.addEventListener('click',()=>{

    while (forcastcard.hasChildNodes()) {
        forcastcard.removeChild(forcastcard.firstChild);
    }


    
        getData(inputcity.value);
    

});
