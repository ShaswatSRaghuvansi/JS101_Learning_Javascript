let a =10;
let b =20;
let c =30;
let d =40;

if ( a>b && c>d){   // false && false = false( NO )
  console.log("YES");
}else{
  console.log("NO");
}


a>b && c>d ? console.log("YES") : console.log("NO");

// print login if entered email and pw matches the one that are registered

let dbus = "abc@gmail.com";
let dbpw = "123abc";

let us = "abc@gmail.com";
let pw = "123abc";

// NESTED if else
if( us == dbus ){
  if ( pw == dbpw ){
    console.log("Login 1");
  }else {
    console.log("Wrong Pw 1");
  }
}else {
  console.log("Wrong Credentials 1");
}

// simplifying NESTED if else
if( (us == dbus)&&( pw == dbpw ) ){
  
    console.log("Login 2");
  
  }else {
  console.log("Wrong Credentials 2");
}


// using ITENARY OPERATOR
(us == dbus) && (pw == dbpw)? console.log("Login 3") : console.log("Wrong Credentials 3");