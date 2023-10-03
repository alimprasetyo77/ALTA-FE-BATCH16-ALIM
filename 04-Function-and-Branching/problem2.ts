function palindrome(word: string): boolean {
  // your code here
  let hasil = ""
  for (let index = word.length - 1 ; index >= 0; index--) {
    hasil += word[index];
  }
  return hasil === word
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false

export default palindrome;
