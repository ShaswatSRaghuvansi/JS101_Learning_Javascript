// print hello world 5 times

// for ( let i=1; i<=5; i++ )
//   {
// //    console.log("Hello World");
//   }

// for ( let i=1; i<=5; i++ )
//   {
    
// //    console.log(i);
//   }

// let sum = ""; // just by taking empty string , we used concatination method to print 1 to 5 in line . because inside sum = we add "sum" to num = "sumnum" i.e. sum = ""+1 = "1", thne sum = "1"+2="12" ...
// for ( let i=1; i<=5; i++ )
//   {
//     sum=sum+" "+i;
    
//   }
// //console.log(sum);


// //print number from 10 to 1

// for ( let i=10; i>=1; i--)
//   {
// //    console.log(i);
//   }

// // print num from 10 to 1 in horizontal line
// let horz ="";
// // //for ( let i=10; i>=1; i-- )
// //   {
// //     horz = horz+" "+i;
// //   }
// // //console.log(horz);

// // // print odd number between 1 and 20 in horz line

let horz ="";
for ( let i=1; i<=20; i++ )
  {
    if(i%2 == 1){
      
      horz += i+ " " ;
    }
    
  }console.log(horz);