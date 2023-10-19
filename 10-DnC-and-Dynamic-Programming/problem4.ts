function romanNumerals(value: number): string {
  const angkaRomawi = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let result = '';

  for (let i = 0; i < angkaRomawi.length; i++) {
    // simpan element angka lalu bandingkan dengan value(parameter) jika true, simpan angka Romawi dan kurangi value(parameter) dengan element di index sekarang
    const element = Number(angkaRomawi[i][0]);
    while (value >= element) {
      result += angkaRomawi[i][1]
      value -= element
    }
  }
  return result
}

console.log(romanNumerals(6)); // VI
console.log(romanNumerals(9)); // IX
console.log(romanNumerals(23)); // XXIII
console.log(romanNumerals(2021)); // MMXXI
console.log(romanNumerals(1646)); // MDCXLVI

export default romanNumerals;
