function frog(jumps: number[]): number {
  const totalBiaya: number[] = [0, Math.abs(jumps[1] - jumps[0])];
  for (let i = 2; i < jumps.length; i++) {
    const biaya1 = totalBiaya[i - 1] + Math.abs(jumps[i] - jumps[i - 1]);
    const biaya2 = totalBiaya[i - 2] + Math.abs(jumps[i] - jumps[i - 2]);

    if (biaya1 < biaya2) {
      totalBiaya.push(biaya1);
    } else {
      totalBiaya.push(biaya2);
    }
  }
  console.log("data " + jumps)
  console.log("Total cost " + totalBiaya)

  return totalBiaya[jumps.length - 1];
}


/*
default value [0, hasil lompatan pertama]

iterasi 2
cost1 = 20 + 40 - 30 = 30
cost2 = 0 + 40 - 10 = 30

iterasi 3
cost 1 = 30 + 20 - 40 = 50
cost 2 = 20 + 20 - 30 = 30

if(cost a < cost b)
cost a push ke array

*/

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40

export default frog;
