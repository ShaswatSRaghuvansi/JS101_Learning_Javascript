// Problem 4: Print the average of even numbers from 1 to 100 (both included)

// find even
// calc sum and count
// cals the average


let i = 1;
let sum = 0;
let count = 0;

while ( i <= 100 )       // loop
  {
    if ( i % 2 ==0 )     // checking even
    {
      sum = sum + i;     // calc sum
      count++;           // calc count of even num found
    }
    i++;
  }
                         // print: avg
console.log("avg is ",sum / count); 