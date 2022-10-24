let x=1;


// while ( x <= 10 )    //starting of loop
//   {
    
//     if ( x == 3 )
//     {
//       console.log("continue ",x);
//       continue; // skip everything written under me and reach                      the starting of loop i.e x++ will be skipped and x=3 <= 10 ... no if 3== 3 then continue and so on.....
//     }

//     console.log(x);
//     x++; // controls termination of loop
    
//   }



while ( x <= 10 )    //starting of loop
  {
    x++;
    if ( x == 3 )    // when x=3, it skipped printing , so later got x++ to 4. i.e. 2,4,5,6,7,8,9,10,11(last x++ before getting ended) 
    {
      
      
      continue; // skip everything written under me and reach                      the starting of loop i.e x++ will be skipped and x=3 <= 10 ... no if 3== 3 then continue and so on.....
    }

    console.log(x);
   
    
  }
