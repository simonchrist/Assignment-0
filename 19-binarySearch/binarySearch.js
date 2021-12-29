class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let min=0;
    let max =nums.length-1;
    while(min<=max){
      let avg=Math.floor((min+max)/2);
      if(nums[avg]==target){
        return true;
      }
else if(nums[avg]<target){
  min = avg++;
  this.binarySearch(min,target);
}
else if(nums[avg]>target){
  max=avg-1;
  this.binarySearch(max,target);
}
}
return false;
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;