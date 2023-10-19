function makeDiamond(char: string): void {
  const alphabet = ["A", "B", "C", "D", "E"]
  const findIndexByChar = alphabet.findIndex(element => element === char)
  const cutArr = alphabet.slice(0, findIndexByChar + 1)

  let result = ""

  // Atas
  for (let i = 1; i < cutArr.length + 1; i++) {
    for (let j = 1; j <= cutArr.length - i + 1; j++) {
      result += ".";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k == 2 * i - 1) {
        result += `${cutArr[i - 1]}`;
      } else {
        result += ".";
      }
    }

    for (let l = 1; l <= cutArr.length - i + 1; l++) {
      result += ".";
    }
    result += "\n";
  }

  // Bawah
  for (let i = cutArr.length - 1; i >= 1; i--) {
    for (let j = 1; j <= cutArr.length - i + 1; j++) {
      result += ".";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k == 2 * i - 1) {
        result += `${cutArr[i - 1]}`;
      } else {
        result += ".";
      }
    }

    for (let l = 1; l <= cutArr.length - i + 1; l++) {
      result += ".";
    }
    result += "\n";
  }

  console.log(result)
}

makeDiamond("C");
makeDiamond("E");

export default makeDiamond;
