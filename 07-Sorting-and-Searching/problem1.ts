function maximumBuyProduct(money: number, productPrice: number[]): number {
  if (money <= 0) return 0
  const productSort: number[] = productPrice
  let totalBelanja: number = 0
  let totalUang: number = money

  for (let i = 0; i < productSort.length; i++) {
    for (let j = i + 1; j < productSort.length; j++) {
      if (productSort[i] > productSort[j]) {
        let temp = productSort[i]
        productSort[i] = productSort[j]
        productSort[j] = temp
      }

    }
  }

  for (let index = 0; index < productSort.length; index++) {
    if (totalUang >= productSort[index]) {
      totalUang = totalUang - productSort[index]
      totalBelanja++
    }
  }
  return totalBelanja
}

console.log(maximumBuyProduct(50000, [25000, 25000, 10000, 14000])); // 3
console.log(maximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000])); // 4
console.log(maximumBuyProduct(10000, [2000, 3000, 1000, 2000, 10000])); // 4
console.log(maximumBuyProduct(4000, [7500, 3000, 2500, 2000])); // 1
console.log(maximumBuyProduct(0, [10000, 30000])); // 0

export default maximumBuyProduct;
