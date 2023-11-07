var twoSum = function(nums, target) {
   for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {

      if (nums[i]+nums[j] == target) {
       console.log("found", [i,"",j]);
       return [i, j];
      
      }
      const b = nums[j];
      
    }
    const a = nums[i];
    
   } 
  return []
};


console.log("twoSum", twoSum([2,7,11,15], 9));
