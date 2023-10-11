function playingDomino(cards: number[][], deck: number[]): number[] {
  let kartuYgCocok: number[] = []
  let jumlahKartuTertinggi = 0
  for (let index = 0; index < cards.length; index++) {
    const kartuSekarang = cards[index]
    if (kartuSekarang.includes(deck[0]) || kartuSekarang.includes(deck[1])) {
      const jumlahKartuSekarang = kartuSekarang[0] + kartuSekarang[1]
      if (jumlahKartuSekarang > jumlahKartuTertinggi) {
        jumlahKartuTertinggi = jumlahKartuSekarang
        kartuYgCocok = kartuSekarang
      }
    }
  }

  return kartuYgCocok.length > 0 ? kartuYgCocok : [];
}




console.log(
  playingDomino(
    [
      [6, 5],
      [3, 4],
      [2, 1],
      [3, 3],
    ],
    [4, 3]
  )
); // [3, 4]
console.log(
  playingDomino(
    [
      [6, 5],
      [3, 3],
      [3, 4],
      [2, 1],
    ],
    [3, 6]
  )
); // [6 5]
console.log(
  playingDomino(
    [
      [6, 6],
      [2, 4],
      [3, 6],
    ],
    [5, 1]
  )
); // []

export default playingDomino;
