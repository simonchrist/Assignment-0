function pairSum(nums, target) {
  if(nums.length<=1)
  throw "Empty";
  let ans = 0;
for (i=0;i<nums.length;i++)
{
  ans=nums[i];
  for(j = 0;j<nums.length;j++)
  {
    if (nums[i]+nums[j]==target)
      return true;
  }
}
return false;
}

// Do not edit this line;
module.exports = pairSum;