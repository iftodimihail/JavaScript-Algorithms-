//returns true only if bool = true or false

function booWho(bool) {
  return typeof bool === 'boolean';
}
booWho(null);

//output: false