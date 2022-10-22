let a= 5
let b= 6
let c= "6"
let d= -2
let e= "7"


console.log(b==c);  // only values (true)
console.log(b===c); // value+data type (false)
console.log(a>=c);  // 
// here 5 and 6 are values but data type is num and string, the compiler only compares value as in == (relational ops only for num) inside data type string, its still 6 num. hence (false) as 5>6 fal;se 


console.log(b<=c); // similarly b and c have num 6, and are equal, so true. as dual ops dont look at data type.

console.log(d<=a);

