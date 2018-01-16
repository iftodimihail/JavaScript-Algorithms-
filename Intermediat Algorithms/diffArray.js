function diffArray(arr1, arr2){
  var newArr = [];
  var flag = true;
  var unif = arr1.concat(arr2);
  for(var i=0;i<unif.length;i++){
    flag = true;
    for(var j = unif.length-1; j>=0; j--){
      console.log(unif[i]+":"+unif[j]);
      if(unif[i] === unif[j] && i!==j){
        flag = false;
        break;
      }
    }
     if(flag == true)
        newArr.push(unif[i]);
  }
  return newArr;
}

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);

// checks what elements differ in 2 array and makes a new array with them

//Output: [6,4];
