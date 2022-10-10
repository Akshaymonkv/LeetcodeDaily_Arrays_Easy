//Using a hash map

   var twoSum = function(nums, target) {
   var map={}
   for(i=0;i<nums.length;i++){
       let a = nums[i];
       let b = target - a
       
       if (map[b]!=undefined){
           return [map[b],i]
       }
       else{
           map[a] = i;
       }
    }
};
