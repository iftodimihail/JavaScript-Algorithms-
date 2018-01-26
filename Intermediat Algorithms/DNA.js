//DNA pair
function pairElement(str) {
  var pairArr= [];
  
  var find = function(char) {
    switch (char) {
      case 'A':
        pairArr.push(['A', 'T']);
        break;
      case 'T':
        pairArr.push(['T', 'A']);
        break;
      case 'C':
        pairArr.push(['C', 'G']);
        break;
      case 'G':
        pairArr.push(['G', 'C']);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    find(str[i]);
  }

  return pairArr;
}

