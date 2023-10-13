function jajanBoba(uang: number, callback: (uang: number) => void): void {
  let uangYgDimiliki = uang
  const hargaBoba = 5000

  console.log(`Kamu jajan boba dengan harga Rp.${hargaBoba}`)
  setTimeout(() => {
    uangYgDimiliki = uangYgDimiliki - hargaBoba
    console.log(`Sisa uang kamu Rp.${uangYgDimiliki}`)
    callback(uangYgDimiliki)
  }, 5000);

}

function jajanSeblak(uang: number): void {
  let sisaUang = uang
  const hargaSeblak = 8000

  setTimeout(() => {
    console.log(`Kamu jajan seblak dengan harga Rp.${hargaSeblak}`)
    if (sisaUang - hargaSeblak < 0) {
      console.log("Maaf uang kamu belum cukup untuk membeli seblak")
      console.log("Sisa uang kamu sebesar Rp." + uang)
    } else {
      sisaUang = sisaUang - hargaSeblak
      console.log("Sisa uang kamu sebesar Rp." + sisaUang)
    }
  }, 9000);
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
