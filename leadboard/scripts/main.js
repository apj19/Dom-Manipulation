const data= [
    {
    fname:'Virat',
    lname:'kohli',
    country:'India',
    score:55
},
{
    fname:'rohit',
    lname:'sharma',
    country:'India',
    score:85
},
{
    fname:'kane',
    lname:'willames',
    country:'newzwland',
    score:75
}
]

{/* <div class="bg-[#F8CBA6] grid grid-cols-4 ">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>

		</div> */}
// let a="akshay";
// a.toLowerCase()
const main= document.querySelector('main');
const message=document.getElementById('message');
message.className="text-center text-[red]";


function addPlayer(fname,lname,country,score,index){
    let maindiv=document.createElement('div');
    maindiv.id=`player${index}`
    maindiv.className="bg-[#F8CBA6] grid grid-cols-3  gap-2 md:grid-cols-4  mb-4 p-4 justify-center items-center";

    let fnamdiv=document.createElement('div');
    fnamdiv.innerText=`${fname.toUpperCase()} ${lname.toUpperCase()}`;
    maindiv.appendChild(fnamdiv);

    // let lnamediv=document.createElement('div');
    // lnamediv.innerText=lname;
    // maindiv.appendChild(lnamediv);

    let countrydiv=document.createElement('div');
    countrydiv.innerText=country.toUpperCase();
    maindiv.appendChild(countrydiv);

    let scorediv=document.createElement('div');
    scorediv.innerText=score;
    maindiv.appendChild(scorediv);

    let btndiv=document.createElement('div');
    btndiv.className="flex justify-center items-center gap-2 col-span-3 md:col-auto"
    btndiv.id=`${index}`

    let icon=document.createElement('i');
    icon.className="fa-solid fa-trash bg-[#ffff] border rounded-[50%] h-[2rem] w-[2rem] flex justify-center items-center";
    icon.addEventListener('click',(e)=>{
        
        // console.log(e.target.parentElement.id);
        // let deleteid=e.target.parentElement.id;
        
        //  let deletediv=document.getElementById(`player${e.target.parentElement.id}`);
         let deletediv=document.getElementById(`player${e.target.parentElement.id}`);
         data.forEach((e,index)=>{
            if(e.fname == fname){
                data.splice(index,1);
            }
         });

         main.removeChild(deletediv);
    })
    btndiv.appendChild(icon);

    let addscore=document.createElement('button');
    addscore.className="bg-[#ffff] border rounded-[50%] h-[2rem] w-[2rem] flex justify-center items-center";
    addscore.innerText="+5";
    addscore.addEventListener('click',()=>{
        // data[index].score+=5;
        data.forEach((e,index)=>{
            if(e.fname==fname){
                
                data[index].score += 5;
            }
            
        });
        refreshmain(data);

    });
    btndiv.appendChild(addscore);

    let minusscore=document.createElement('button');
    minusscore.className="bg-[#ffff] border rounded-[50%] h-[2rem] w-[2rem] flex justify-center items-center";
    minusscore.innerText="-5";
    minusscore.addEventListener('click',()=>{
        
        data.forEach((e,index)=>{
            if(e.fname==fname){
                if(data[index].score<5){
                    data[index].score=0;
                }else{
                      data[index].score-=5;

                }

            }
        });
        
        // data[index].score-=5;
        refreshmain(data);

    });
    btndiv.appendChild(minusscore);



    maindiv.appendChild(btndiv);

    return maindiv;


}

data.sort((a,b)=>{
    return a.score - b.score;
});

function refreshmain(data){
    
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    data.sort((a,b)=>{
        return b.score - a.score;
    })

    

    data.forEach((e,index)=>{
        let entry=addPlayer(e.fname,e.lname,e.country,e.score,index);
        main.appendChild(entry);
    });  
}

//adding intial players
refreshmain(data);

// console.log();



let firstname=document.getElementById('fname');
let lastname=document.getElementById('lname');
let country=document.getElementById('country');
let score=document.getElementById('score');


let addplayerbtn=document.getElementById('addplayer');


addplayerbtn.addEventListener('click', (e)=>{
    
   
   if(
    firstname.value == '' || lastname.value =='' ||
    country.value == '' ||  score.value==''
   ){
    // let p=document.createElement('p');
    message.innerText="Please select all fileds";
    // p.className="text-center text-[red]";
    // 
    
    // main.appendChild(p);
   }else{
    message.innerText="";
       let newplayer={  };

            newplayer.fname=firstname.value;
            newplayer.lname=lastname.value;
            newplayer.country=country.value;
            newplayer.score=parseInt(score.value) ;
            data.push(newplayer);
            refreshmain(data);

   }
   
   firstname.value='';
   lastname.value='';
   country.value='';
   score.value='';
    

//    


   
});