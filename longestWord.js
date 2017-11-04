function findLongestWord(str) {
  var strArray = str.split(" ");
  var longest=strArray[0].length;
 for(var i=0;i<strArray.length-1;i++){
    if(longest < strArray[i+1].length)
     longest=strArray[i+1].length;
  }
    
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
