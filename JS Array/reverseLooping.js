const nums = [1,23,4,5,6,7,84];

// 1st way to reverse
// console.log('original: ',nums);

// nums.reverse();

// console.log('reversed: ',nums);


//2nd way
// const rev = []
// for(const n of nums){
//      rev.unshift(n);
// }

// console.log(rev);

// 3rd way

for(let i=nums.length-1;i>=0;i--){
    console.log(nums[i]);
}