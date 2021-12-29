function setUnionOfAnyAmountOfSets(...args) {
  let aset=new Set();
  for (set of args){
    for(num of set){
      aset.add(num);
    }
  }
  return aset;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;