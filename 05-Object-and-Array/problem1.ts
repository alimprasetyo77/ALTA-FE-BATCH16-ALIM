function compareString(a: string, b: string): string {
  let str = ""
  for (let index = 0; index < a.length; index++) {
    if (a[index] === b[index]) {
      str += a[index]
    }
  }
  return str
}

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGAROO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA

export default compareString;
