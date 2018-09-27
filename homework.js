
//exercise 1

 const func1=function(p1,p2,p3){

return (p1 + p2)*p3
};

console.log(func1(12,2,23));

// exercise 2

 const bldo=function() {

return "YUHOOOO"
};

 console.log(bldo());


 // 3 exercise

 const lll=function(a,b){
   const c = (a * b) *0;
 };
  lll(-1,1);


  // exercise 4

  const bubu=function(s1,s2,s3){

  	let longest = s1;
  	if (s2.length > longest.length) {
  		longest = s2
  	}
  	if (longest.length < s3.length) {
  		longest = s3;
  	}

  	return longest
  };

  console.log(bubu("abcd","abc","abcdf") );


//exercise 5


 const gigi=function(a,b){

	if (a===b) {
return 0
	} else if (a>b) {
		return 1
	}
	else{
		return -1
	}
	
};

console.log(gigi(2,2));


//exercise 6

 const jifi=function(a,b){
	const z=a*b
	return z
};

console.log(jifi(4,5));


//exercise 7

const jigi=function(a,b){
	const k=a/b
	return k
};

console.log(jigi(4,2));

//exercise 8


  const triangleArea=function(base,height) {
  	const k=jifi(base,height)
  	const g=jigi(k,2)
  	return g 
  
  };

  console.log(triangleArea(9,2));

  //exercise 9

 const numLength=function(a){
     let g=a.toString()
    return g.length

};

console.log(numLength(80456));

//exercise 10

 const kiki=function(a,b,c) {
   q=a.length + b.length
   if (q>c) {
   	return 1
   } else {
   	return -1
   }
};
console.log(kiki("Valod","dzya",55));

//exercsie 11


 const runStuff= function(base,height,c){
 	if (c==="rectangle") {
 		return base*height
 	}
 	else if(c==="triangle"){
 		return (base*height)/2
 	}
 	else{
 		return -1
 	}
 }
 console.log(runStuff(9,8,"bubu"))

