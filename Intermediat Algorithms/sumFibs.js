/*Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.*/

function sumFibs(num) {
  var sum = 0;
  var arr = [1,1];
  for(var i=0; i<9000;i++){
    if(arr[i]+arr[i+1] <= num)
      arr.push(arr[i]+arr[i+1]);
    else break;
  }
  
  //filters for odd numbers
  arr = arr.filter(function(a){
    if(a%2 != 0)
      return a;
  });
  
  //reduces the aray to it's sum
  sum = arr.reduce(function(acc,curr){
    return acc+curr;
  });

  return sum;
}

//Output
/* sumFibs(4) = 5;
