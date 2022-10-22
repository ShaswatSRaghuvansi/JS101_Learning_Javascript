//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// credentials  stored in DATA BASE
let db_us_name="mail@gmail.com";
let db_pw="pw123";

// credentials entered by user while login
let login_us_name="mail@gmail.com";
let login_pw="pw123";

if (db_us_name == login_us_name){
  if (db_pw == login_pw){
    console.log("Login Successfully");
  }else{
    console.log("Incorrect Password");
  }
}else {
  console.log("Check Credentials");
}