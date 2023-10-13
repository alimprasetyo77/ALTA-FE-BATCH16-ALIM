function dragonOfLoowater(dragonHead: number[], knightHeight: number[]): number | string {
  dragonHead.sort((a, b) => a - b);
  knightHeight.sort((a, b) => a - b);

  let totalTinggi = 0;
  let kepalaNagaYgDipotong = 0;
  for (let i = 0; i < knightHeight.length; i++) {
    if (kepalaNagaYgDipotong !== dragonHead.length) {
      if (knightHeight[i] >= dragonHead[kepalaNagaYgDipotong]) {
        totalTinggi += knightHeight[i];
        kepalaNagaYgDipotong++;
      }
    }

  }

  return kepalaNagaYgDipotong === dragonHead.length ? totalTinggi : "knight fall"
}
// [1,2,5,8]
// [2,7]
console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // knight fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10

export default dragonOfLoowater;
