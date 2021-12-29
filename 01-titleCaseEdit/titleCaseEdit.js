function titleCaseEdit(title) {
  let string = title; //string var holds the title
  let arr=title.split(" "); //parse the title for spaces
for (let i=0; i<arr.length;i++){
  arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
}
let final = arr.join(" ");
return final;
}

// Do not edit this line;
module.exports = titleCaseEdit;