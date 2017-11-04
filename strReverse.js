function reverseString(str) {
  var strArray=str.split("");
  var revStr="";
  strArray.reverse();
  revStr=strArray.join("");
  return revStr;
}
