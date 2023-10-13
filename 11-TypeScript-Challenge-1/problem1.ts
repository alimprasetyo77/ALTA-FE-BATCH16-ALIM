function playWithAsterik(n: number): any {
  let result: string = ""
  for (let i = 1; i <= n; i++) {

    for (let k = n; k > i; k--) {
      result += " "
    }

    for (let j = 0; j < i; j++) {
      result += "* "
    }

    result += "\n"
  }
  return result
}

console.log(playWithAsterik(5));

export default playWithAsterik;
