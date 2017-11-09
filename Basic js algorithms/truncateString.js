function truncateString(str, num) {
  if(num>=str.length)
    return str;
  else if(num>3)
    return str.slice(0,num-3)+"...";
  else return str.slice(0,num)+"...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//Output: A-tisket...

/*
Truncate a string (first argument)if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/