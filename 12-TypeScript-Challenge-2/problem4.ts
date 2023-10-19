function findMaxSumSubArray(k: number, arr: number[]): number {
  let finalSum = 0

  for (let i = 0; i < arr.length; i++) {
    const sliceResult = arr.slice(i, i + k)
    let currentSum = 0

    if (sliceResult.length === k) {
      sliceResult.forEach(element => currentSum += element)
      if (currentSum > finalSum) {
        finalSum = currentSum
      }
    }

  }

  return finalSum
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8

export default findMaxSumSubArray;
