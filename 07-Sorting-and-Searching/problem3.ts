interface hasil {
  [key: string]: number
}
function mostAppearItem(items: string[]): any {
  let hasil: hasil = {}
  for (let i = 0; i < items.length; i++) {
    if (hasil[items[i]]) {
      hasil[items[i]] += 1
    } else {
      hasil[items[i]] = 1
    }
  }

  const sortedEntries = Object.entries(hasil).sort((a, b) => a[1] - b[1]) // Ubah ke array
  return Object.fromEntries(sortedEntries) // kembalikan ke object
}

console.log(mostAppearItem(["js", "js", "golang", "ruby", "ruby", "js", "js"])); // golang->1 ruby->2 js->4
console.log(mostAppearItem(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"])); // C->1 D->2 B->3 A->4
console.log(mostAppearItem(["football", "basketball", "tenis"])); // football->1 basketball->1 tenis->1

export default mostAppearItem;
