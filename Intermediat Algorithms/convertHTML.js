//Converts special HTML characters into HTML entities
function convertHTML(str) {
  var charArr = str.split('');
  for (var i = 0; i < charArr.length; i++) {
    switch (charArr[i]) {
      case '&':
       charArr[i] = '&amp;';
        break;
      case '<':
        charArr[i] = '&lt;';
        break;
      case '>':
        charArr[i] = '&gt;';
        break;
      case '"':
        charArr[i] = '&quot;';
        break;
      case "'":
        charArr[i] = "&apos;";
        break;
    }
  }

  var string = charArr.join('');
  return string;
}

convertHTML("Shindler's List");

//output: Shindler&​apos;s List

