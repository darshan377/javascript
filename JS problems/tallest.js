const heights = [65,66,68,71,56,87,43];

function getMax(nums){
    let max = nums[0];
    for(const n of nums){
        if(n > max){
            max = n;
        }
    }
    return max;
}

const max = getMax(heights);
console.log(max);