let a=[10,12,5,15,18];
let b=a;

b.sort((a,b)=>{
	return b-a;
});
console.log(a);
console.log(b);