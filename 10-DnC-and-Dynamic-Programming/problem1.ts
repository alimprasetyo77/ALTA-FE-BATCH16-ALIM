function fiboTopDown(n: number): number {
  let result = 0
  if (n <= 1) {
    return n
  } else {
    result = fiboTopDown(n - 1) + fiboTopDown(n - 2)
  }
  return result
}
console.log(fiboTopDown(0)); // 0
console.log(fiboTopDown(1)); // 1
console.log(fiboTopDown(2)); // 1
console.log(fiboTopDown(3)); // 2
console.log(fiboTopDown(5)); // 5
console.log(fiboTopDown(6)); // 8
console.log(fiboTopDown(7)); // 13
console.log(fiboTopDown(9)); // 13
console.log(fiboTopDown(10)); // 55

export default fiboTopDown;
