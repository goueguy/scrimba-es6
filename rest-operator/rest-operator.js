function add(...nums){
    let total = 0;
    for(let i=0;i<nums.length;i++){
        total+=nums[i];
    }
    return total;
}

console.log(add(4,5,7,8,12));