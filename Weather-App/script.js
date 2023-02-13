const url="https://api.weatherapi.com/v1/current.json?key=bd49ad5b728c4495bad110051231102";
const forcasturl="https://api.weatherapi.com/v1/forecast.json?key=bd49ad5b728c4495bad110051231102"


let jsondata;
const leftimg=document.getElementById('leftimg');
const temp=document.getElementById('temp');
const weekday=document.getElementById('weekday');
const currenttime=document.getElementById('currenttime');
const loader=document.getElementById('loader');
const weather= document.getElementById('weather');
const state=document.getElementById('state');
const country = document.getElementById('country');
const forcastcard= document.getElementById('forcastcard');

function getweekday(date){

    let currentweekday=new Date(date);
   const options = { weekday: "short" };
   return new Intl.DateTimeFormat("en-US", options).format(currentweekday);

}


function forcastCard(date,imgsrc,maxtempindegree,mintempindegree){


    let maindiv= document.createElement('div');
    maindiv.className="py-2 flex flex-col justify-center items-center w-28 rounded-[1rem] bg-[#ffff]";

    let day= document.createElement('p');
    day.innerText=getweekday(date);
    maindiv.appendChild(day);

    let img= document.createElement('img');
    img.src=imgsrc;
    maindiv.appendChild(img);

    let temp= document.createElement('p');
    
    let maxtemp= document.createElement('span');
    maxtemp.className="after:content-['°']";
    maxtemp.innerText=maxtempindegree;
    temp.appendChild(maxtemp);

    let mintemp= document.createElement('span');
    mintemp.className="after:content-['°'] opacity-50";
    mintemp.innerText=mintempindegree;
    temp.appendChild(mintemp);

    maindiv.appendChild(temp);

    return maindiv;

}


let callapi = async ()=>{
    
let data= await fetch(`${url}&q=pune`);


 jsondata=await data.json();


 loader.classList.add('hidden');
 
// console.log(jsondata);
leftimg.src=jsondata.current.condition.icon;
temp.innerText=jsondata.current.temp_c;
//calculating week day
let currentweekday=new Date(jsondata.location.localtime);
// const options = { weekday: "long" };
// weekday.innerText=new Intl.DateTimeFormat("en-US", options).format(currentweekday);
weekday.innerText= getweekday(currentweekday);
currenttime.innerText=currentweekday.toLocaleTimeString();

weather.innerText=jsondata.current.condition.text;
state.innerText=jsondata.location.region;
country.innerText=jsondata.location.country;

let forcastdata= await fetch(`${forcasturl}&q=karad&days=7`);

let focastdatajson= await forcastdata.json();
console.log(focastdatajson.forecast.forecastday);

const forcastdstsarray=focastdatajson.forecast.forecastday;

forcastdstsarray.forEach((e)=>{
    let newcard= forcastCard(e.date,e.day.condition.icon,e.day.maxtemp_c,e.day.mintemp_c);
    forcastcard.appendChild(newcard);
})

// for (let i = 0; i < 7; i++) {
    
//     let newcard= forcastCard();
//     // console.log(newcard);
//     forcastcard.appendChild(newcard);
    
// }





// console.log(flagjson[0].flags.png);


};
// event.preventDefault();
callapi();
// console.log("akshay");

const xmas95 = new Date("2023-02-12 9:43");
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(xmas95));

console.log(new Date("2023-02-12 9:43").toLocaleTimeString());
;
