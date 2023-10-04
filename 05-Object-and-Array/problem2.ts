function joinArrayRemoveDuplicate(arrayA: string[], arrayB: string[]): string[] {
  // your code here
  const gabunganArray: string[] = []

  for (let i = 0; i < arrayA.length; i++) {
    if (!gabunganArray.includes(arrayA[i])) {
      gabunganArray.push(arrayA[i])
    }
  }
  for (let j = 0; j < arrayB.length; j++) {
    if (!gabunganArray.includes(arrayB[j])) {
      gabunganArray.push(arrayB[j])
    }
  }
  return gabunganArray
}
console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])); // ["apel", "anggur", "lemon", "leci", "nanas"]
console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])); // ["samsung", "apple", "sony", "xiaomi"]
console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"])); // [“football”, “basketball”]

export default joinArrayRemoveDuplicate;
