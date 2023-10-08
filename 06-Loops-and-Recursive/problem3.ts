function hitungBilanganPrima(number: number): boolean {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let index = 5; index * index <= number; index += 6) {
    if (number % index === 0 || number % (index + 2) === 0) return false;
  }

  return true;
}

function hitungTotalBilangan(array: number[][]): number {
  let jumlah = 0;
  for (const baris of array) {
    for (const prima of baris) {
      jumlah += prima
    }
  }
  return jumlah
}

function primaSegiEmpat(wide: number, high: number, start: number): void {
  let currentNum = start + 1;
  let result: number[][] = [];

  for (let i = 1; i <= high; i++) {
    const row: number[] = [];
    for (let j = 1; j <= wide; j++) {
      while (!hitungBilanganPrima(currentNum)) {
        currentNum++;
      }
      row.push(currentNum);
      currentNum++;
    }
    result.push(row);
  }
  for (const r of result) {
    console.log(r.join(' '))
  }
  console.log("Total semua bilangan : " + hitungTotalBilangan(result))
}



// Console.log di pemanggilan function dihapus karena timbul undefined di output nya
primaSegiEmpat(2, 3, 13);
/*
17 19
23 29
31 37
156
*/
// Console.log di pemanggilan function dihapus karena timbul undefined di output nya
primaSegiEmpat(5, 2, 1);
/*
2  3  5  7 11
13 17 19 23 29
129
*/

export default primaSegiEmpat;
