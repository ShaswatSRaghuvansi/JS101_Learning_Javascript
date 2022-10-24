/* 3 logical operators  : helps in simplifying code
  1. &&(and op) 
  2. || (or op)
  3. ! not ( !true = false , !false = true)

cond1 marks >= 80%
cond2 engscore >= 90%
result GET A BIKE

"ALL" THE COND MUST BE TRUE : ONLY THEN RESULT WILL BE "TRUE"

true && false
false

 false  &&  false
false

 false && true && false
false

 true && true && true
true


// O R OPERATOR

let w= 1;
let x= 10;
let y= 20;
let z= 30;

if ( w>x || y>z ){
  console.log("YES");
}else {
  console.log("NO");
}



// not operator

console.log( (!(6>9) || !(9==10)) || (50 >=40 && 10 == "10" || 20>10) && ! (15>="15" || 20==="20"));


