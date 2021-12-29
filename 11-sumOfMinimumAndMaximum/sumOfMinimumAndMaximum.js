function sumOfMinimumAndMaximum(nums) {
  let min = nums[0];
    let max = nums[0];
    for(i=0;i<nums.length;i++){
        if(nums[i] < min) 
        {min = nums[i];
        }
    }
    for(i =0;i<nums.length;i++){
        if(nums[i] > max) 
        {max = nums[i];
        }
    }
    return min+max;
};

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;