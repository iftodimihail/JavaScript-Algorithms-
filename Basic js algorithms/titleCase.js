function titleCase(str) {
  var upper = "";
  var strArray = str.split(" ");
  for(var i=0; i<strArray.length;i++){
    strArray[i]=strArray[i].toLowerCase();
 strArray[i]=strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
  }
  upper = strArray.join(" ");
 return upper;
}

titleCase("I'm a little tea web developer");