let a= 10;
let b= 20;
let c= 50;
let d= 40;

if ( a>b || c>d ){
  console.log("YES");
}else {
  console.log("NO");
}


let gen = "male";
let age = 25;



if (gen == "female"){
  if ( age >= 21 ){
    console.log(gen, age, "Can Marry 1");
  } // lack of else statement , will not print anything , drawback
}

else if ( gen == "male") {
  if ( age >= 23 ){
   console.log(gen, age, "Can Marry 1");
}// lack of else statement , will not print anything , drawback
}
else {
    console.log("No 1");
}




// simplifying NESTED IF ELSE 

if (gen == "female" && age >= 21){
  
    console.log(gen, age, "Can Marry 2");
  
}

else if ( gen == "male" && age >= 23) {
  
   console.log(gen, age, "Can Marry 2");

}
else {
    console.log(gen, age, "Cannot Marry 2");
}



// using ITENARY Operator

(gen == "female" && age >= 21) || ( gen == "male" && age >= 23) ? console.log(gen, age, "Can Marry 3") : console.log(gen, age, "Cannot Marry 3")


