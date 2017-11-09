
function largestOf(arr) {
  var maxVar=[];
  var max;
  for(var i=0;i<arr.length;i++){
    max=arr[i][0];
    for(var j=1;j<arr[i].length;j++){
      if(max<arr[i][j])
        max=arr[i][j];
     }  
    maxVar[i]=max;
  }
  return maxVar;
}

largestOf([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
//Output [5, 27, 39, 1001]