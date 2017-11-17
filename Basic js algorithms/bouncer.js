function bouncer(arr) {
  return arr.filter(function(char){
    if(char)
      return char;
  }); 
}

bouncer([7, "ate", "", false, 9]);

//Output [7, "ate", 9];