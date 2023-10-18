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
  for (let i = 0; i < angkaRomawi.length; i++) {
    if (value >= Number(angkaRomawi[i][0])) {
      return angkaRomawi[i][1] + romanNumerals(value - Number(angkaRomawi[i][0]));
    }
  }
  return ""
}

console.log(romanNumerals(6)); // VI
console.log(romanNumerals(9)); // IX
console.log(romanNumerals(23)); // XXIII
console.log(romanNumerals(2021)); // MMXXI
console.log(romanNumerals(1646)); // MDCXLVI

export default romanNumerals;
