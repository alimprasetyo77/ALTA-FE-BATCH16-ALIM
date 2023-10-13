function simpleEquations(a: number, b: number, c: number): string {
  let hasil: string = ""
  for (let x = 1; x <= 1000; x++) {
    for (let y = x; y <= 1000; y++) {
      for (let z = y; z <= 1000; z++) {
        if (x + y + z === a && x * y * z === b && x * x + y * y + z * z === c) {
          hasil = `${x}, ${y}, ${z}`
        }
      }
    }
  }
  return hasil ? hasil : "no solution"
}

console.log(simpleEquations(1, 2, 3)); // no solution
console.log(simpleEquations(6, 6, 14)); // 1 2 3

export default simpleEquations;
