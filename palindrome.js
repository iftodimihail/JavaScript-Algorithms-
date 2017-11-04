function palindrome(str) {
  var lowerStr=str.toLowerCase();
  var strippedStr=lowerStr.replace(/[^A-Za-z0-9]/g, ''); //gets rid of any non-aplhanumerical characters
  var reversedStr="";
  var strArray = strippedStr.split("");
  strArray.reverse();
  reversedStr = strArray.join("");
  if(strippedStr===reversedStr)
    return true;
  else
    return false;
}

palindrome("2_A3*3#A2"); // output: 2a33a2
