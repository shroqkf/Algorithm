function solution(nums) {
    const N = nums.length;
    const half = N / 2;
    
    const uniqueCount = new Set(nums).size;
    
    return Math.min(uniqueCount, half);
}