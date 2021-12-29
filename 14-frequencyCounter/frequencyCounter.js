function frequencyCounter(word) {
  let arr={};
  for (i=0;i<word.length;i++){
    if(arr[word[i]])
    arr[word[i]]+=1;
    else 
    arr[word[i]]=1;
  }
  return arr;
}

// Do not edit this line;
module.exports = frequencyCounter;