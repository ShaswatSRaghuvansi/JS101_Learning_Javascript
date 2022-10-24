//Problem 4: Given 3 numbers (all different values), print which is greatest



let a =10;
let b =288;
let c =30;

if ( a>b && a>c ){
  console.log(" a is greatest");
}else if ( b>c && b>c ){
  console.log("b is greatest");
}else {
  console.log("c is greatest");
}


( a>b && a>c ) ? console.log(" a is greatest") : ( b>c && b>c ) ? console.log("b is greatest") : console.log("c is greatest");