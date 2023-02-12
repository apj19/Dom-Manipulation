const url="https://api.weatherapi.com/v1/current.json?key=bd49ad5b728c4495bad110051231102";
const flgurl="https://restcountries.com/v3.1/name/";


let jsondata;
const leftimg=document.getElementById('leftimg');
const temp=document.getElementById('temp');
const weekday=document.getElementById('weekday');
const currenttime=document.getElementById('currenttime');
const flag= document.getElementById('flag');
const weather= document.getElementById('weather');



let callapi = async ()=>{
let data= await fetch(`${url}&q=pune`);


 jsondata=await data.json();
// console.log(jsondata);
leftimg.src=jsondata.current.condition.icon;
temp.innerText=jsondata.current.temp_c;
//calculating week day
let currentweekday=new Date(jsondata.location.localtime);
const options = { weekday: "long" };
weekday.innerText=new Intl.DateTimeFormat("en-US", options).format(currentweekday);
currenttime.innerText=currentweekday.toLocaleTimeString();

weather.innerText=jsondata.current.condition.text;



let flagdata= await fetch(`${flgurl}${jsondata.location.country}`);
flagjson=await flagdata.json();

flag.src=flagjson[0].flags.png;

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
