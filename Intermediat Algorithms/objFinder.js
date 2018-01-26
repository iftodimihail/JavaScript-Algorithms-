function objFind(collection, source) {
  var arr = collection.filter(function(item){
    for(var i in source){
      if(source[i] !=  item[i])
        return false;
    }
    return true;
  });
  return arr;
}

objFind([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

//outputs:  [{ "a": 1, "b": 2 } , { "a": 1, "b": 2, "c": 2 }];
