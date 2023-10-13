function isPangram(texts: string): boolean {
  const aplphabet = "abcdefghijklmnopqrstuvwxyz"
  let hasil: boolean = false
  for (let i = 0; i < aplphabet.length; i++) {
    if (texts.includes(aplphabet[i])) {
      hasil = true
    } else {
      hasil = false
    }
  }
  return hasil
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Public junk dwarves hug my beloved pillow")); // false
console.log(
  isPangram("Jim quickly realized that the beautiful gowns are expensive")
); //true
console.log(isPangram("Back in June we delivered oxygen equipment")); // false

export default isPangram;
