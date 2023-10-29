const twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; 0 < nums.length; ++i){
        for (let j = 0; j < nums.length; ++j){
            if (nums[i] + nums[j] !== target){
                continue;
            } else if (nums[i] + nums[j] === target) {
                return result = [i, j];
            }
        }
        if (nums[i] + nums[j] === target){
            return result = i, j;
        }
    }
};

console.clear();

console.log(twoSum([2, 7, 11, 15], 26));