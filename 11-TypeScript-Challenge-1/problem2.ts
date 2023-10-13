function ubahHuruf(sentence: string): string {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let hasil: string = ""
  for (let i = 0; i < sentence.length; i++) {
    const cari = alphabet.findIndex(element => element === sentence[i])
    if (cari === -1) {
      hasil += " "
      continue
    }
    if (alphabet[cari + 10] === undefined) {
      const selisihIndex = cari + 10 - alphabet.length
      hasil += alphabet[selisihIndex]
    } else {
      hasil += alphabet[cari + 10]
    }
  }
  return hasil
}

console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB

export default ubahHuruf;
