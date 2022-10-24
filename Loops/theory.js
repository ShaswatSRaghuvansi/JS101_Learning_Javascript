// short hand notation
//x= x+ 20;
x+=20;

//x= x+ 5;
x+=5;

both increase / decrease the value by 1:

a++   ----> POST INCREMENT ( as ++ is after the variable )
++a   ----> PRE INCREMENT 

a--   ----> POST DECREMENT ( as -- is after the variable )
--a   ----> PRE DECREMENT




y= x++ // value of x is assigned first THEN ++ inc will happen

y= ++x // inc happen first THEN value is assigned











Loops

1. While Loop
2.

// WHILE LOOP decision is made on boolean value, similar to if
1 start of loop
2 till when the loop will run
3 how many jump you making (increment or decrement)

1
while ( 2 ) {
 Code
  3
}

let i=1;
while ( i<=5 ){
  console.log("hello world");
  i= i+1;
}