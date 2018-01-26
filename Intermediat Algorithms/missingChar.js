//returns the missing character in a range
function fearNotLetter(str) {
  var firstChar = str.charCodeAt(0);
  var lastChar = str.charCodeAt(str.length-1);
  for(var i=firstChar;i<=lastChar;++i){
    if(str[i-firstChar] !== String.fromCharCode(i)){
      return String.fromCharCode(i);
    }
  }
  return undefined;
}

fearNotLetter("abce");

//output: d