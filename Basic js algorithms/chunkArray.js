function chunkArrayInGroups(arr, size) {
  var temp=[];
  var res=[];
  for(var i=0; i<arr.length;i++){
    if(i % size !== size-1)
      temp.push(arr[i]);
    else{
      temp.push(arr[i]);
      res.push(temp);
      temp=[];
     }
   } 
  if (temp.length !== 0)
    res.push(temp);
   return res;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Output: [[""a", "b"],[""c", "d"]]