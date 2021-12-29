class MySolution {
  countDownSum(num) {
    let sum=num;
    if(num>1){
    return sum+=this.countDownSum(num-1);  
}
return sum;
  }}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;