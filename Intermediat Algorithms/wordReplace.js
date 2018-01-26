function wordReplace(str, before, after) {
  var arr = str.split(" ");
  var i=0;
  for(i;i<arr.length;i++){
    if(arr[i] == before){
      if(arr[i][0] !== arr[i][0].toUpperCase()){
         arr[i] = after;
      }
      else{
        after = after[0].toUpperCase()+after.slice(1);
        arr[i] = after;
      }
    }
      
  }
  str = arr.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//outputs: A quick brown fox leaped over the lazy dog
