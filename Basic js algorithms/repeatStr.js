function repeatStringNumTimes(str, num) {
  if(num>0){
    return str.repeat(num);
  }
  return "";
}

repeatStringNumTimes("abc", 3);

/* -- 1st attempt without knowing repeat prototype exists --

function repeatStringNumTimes(str, num) {
  var initStr=str;
  if(num<0)
    return "";
  while(num>1){
    str=str.concat(initStr);
    num--;
  }
  return str;
}

repeatStringNumTimes("abc", 3);*/
