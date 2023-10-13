// interface PromiseType {
//   message: string
// }
function lottery(num: number): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("undian lotre dimulai...")
    console.log("sedang mengundi nomor anda...")
    let undian = +(Math.random() * 1000).toFixed(0)
    setTimeout(() => {
      if (undian === num) {
        resolve("selamat anda mendapatkan hadiah utama berupa mobil")
      } else {
        reject("maaf anda kurang beruntung")
      }
    }, 2000);
  })
}

lottery(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("undian lotre telah berakhir…"));
