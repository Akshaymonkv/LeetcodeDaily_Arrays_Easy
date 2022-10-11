
 var removeDuplicates = function(nums) {
    let a=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!=nums[i+1]){
            nums[a] = nums[i];
            a+=1
        }
    }
    return a
};