function hitungBilanganPrima(number: number): boolean {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let index = 5; index * index <= number; index += 6) {
    if (number % index === 0 || number % (index + 2) === 0) return false;
  }

  return true;
}

function primeX(number: number): number {
  const bilanganPrima: number[] = []
  for (let index = 2; bilanganPrima.length < number; index++) {
    if (hitungBilanganPrima(index)) {
      bilanganPrima.push(index)
    }
  }
  return bilanganPrima[bilanganPrima.length - 1]
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71

export default primeX;
