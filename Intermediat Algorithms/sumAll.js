function sumAll(arr) {
  var sum = 0;
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  for(var i=min; i<=max; i++){
    sum+=i;
  }
  return sum;
}

sumAll([1, 4]);

//sums the terms between 1 and 4: 1 + 2 + 3 + 4 = 10
/*
 var newArr = [];
  var flag = false;
  for(var i=0; i<arr1.length;i++){
    for(var j = 0;j<arr2.length;j++){
      if(arr1[i] === arr2[j]){
        flag = true;
        break;
      }    
    }
    if(flag === false){
     newArr.push(arr1[i]);
    }
  }
  return newArr;
}
*/