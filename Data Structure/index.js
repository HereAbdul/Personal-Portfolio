// const twoSum = (nums, target) =>{
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                   return [i, j]   // return index of these value that give target
//             }
//         }
//     }
// };
// const result = twoSum([2,3,4,5],9)
// console.log(result)


// function topKFrequent(nums, k) {
//     const freqMap = new Map();
    
//     // Create a frequency map of the elements
//     for (const num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }
    
//     // Convert the frequency map to an array of [num, freq] pairs
//     const freqArray = Array.from(freqMap.entries());
    
//     // Sort the array based on frequency in descending order
//     freqArray.sort((a, b) => b[1] - a[1]);
    
//     // Extract the top K frequent elements
//     const result = [];
//     for (let i = 0; i < k; i++) {
//         result.push(freqArray[i][0]);
//     }
    
//     return result;
// }

// // Example usage
// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;
// console.log(topKFrequent(nums, k)); // Output: [1, 2]


class MyArray{
    constructor() {
        this.length=0
        this.data={}
    }
    get(string){
        return this.data={}
    }
}