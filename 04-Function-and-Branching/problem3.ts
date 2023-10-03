function mean(data:number[]){
  const banyakData = data.length
  let jumlahTotalData = 0
  for (let index = 0; index < data.length; index++) {
    jumlahTotalData += data[index];
  }
  return jumlahTotalData / banyakData
}

function median(data:number[]) {
  const panjangData = data.length
  if (panjangData % 2 === 0) {
    let tengah1 = data[(panjangData / 2) - 1];
    let tengah2 = data[panjangData / 2];
    return (tengah1 + tengah2) / 2;
  } else {
    let tengah = data[Math.floor(panjangData / 2)];
    return tengah;
  }
}

function meanMedian(numbers: number[]): string {
  const data = numbers
  return `${ mean(data)} ${median(data)}`
}
console.log(meanMedian([1, 2, 3, 4])); // 2.5 2.5
console.log(meanMedian([1, 2, 3, 4, 5])); // 3 3
console.log(meanMedian([7, 8, 9, 13, 15])); // 10.4 9
console.log(meanMedian([10, 20, 30, 40, 50])); // 30 30
console.log(meanMedian([15, 20, 30, 60, 120])); // 49 30

export default meanMedian;
