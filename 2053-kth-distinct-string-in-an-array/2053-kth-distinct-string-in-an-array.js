/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
   let h={}
for(i=0;i<arr.length;i++){
   if(!h[arr[i]]){
    h[arr[i]] =1;
   }
    else{
        h[arr[i]]+=1
    }
}
    for(let a in h){
        if(h[a]===1){
            if(k===1){
                return a
            }
        if(k>1){
            k--
        }
        }
    }
    return ""
};