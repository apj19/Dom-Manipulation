let a=[10,12,5,15,18];
let b=a;

b.sort((a,b)=>{
	return b-a;
});
console.log(a);//[ 18, 15, 12, 10, 5 ]
console.log(b);//[ 18, 15, 12, 10, 5 ]
//why a is changing i applied sort to b
