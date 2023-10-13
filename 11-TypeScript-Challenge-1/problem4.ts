function caesarCipher(offset: number, input: string): string {
  let result = ""
  for (let index = 0; index < input.length; index++) {
    const konversi = input.charCodeAt(index)
    const jumlahkan = ((konversi - 97 + offset) % 26) + 97
    result += String.fromCharCode(jumlahkan)
  }
  return result
}

console.log(caesarCipher(3, "abc")); // def
console.log(caesarCipher(2, "alta")); // cnvc
console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl

export default caesarCipher;
