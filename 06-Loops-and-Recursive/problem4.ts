function largestNumber(array: number[]): number {

  if (array.length === 1) { // jika element array tersisa 1 maka return element
    return array[0]
  }

  const firstElement = array[0] // element pertama 

  const hapusFirstElement = array.slice(1) // hapus element pertama | ambil element kedua setelah element pertama 

  const hasil = largestNumber(hapusFirstElement) // setiap iterasi hapus satu element array
  return firstElement > hasil ? firstElement : hasil
}

console.log(largestNumber([5, 2, 67, 37, 85, 19, 10])); // 85
console.log(largestNumber([5, 10, 20, 3, 98, 95])); // 98
console.log(largestNumber([20, 22, 18, 25, 75, 62, 88])); // 88
console.log(largestNumber([6, 23, 9, 5])); // 23
console.log(largestNumber([70, 44, 28, 18, 55, 68, 11])); // 70

export default largestNumber;
