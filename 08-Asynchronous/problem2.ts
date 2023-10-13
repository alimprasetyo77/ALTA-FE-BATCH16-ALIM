const clothes = {
  item: "clothes",
  price: 15000,
  time: 3000,
};

const pants = {
  item: "pants",
  price: 25000,
  time: 7000,
};

const hat = {
  item: "hat",
  price: 22000,
  time: 2000,
};

const shoes = {
  item: "shoes",
  price: 46000,
  time: 10000,
};

interface ObjItem {
  item: string;
  price: number;
  time: number;
}

function buyApparel(money: number, objItem: ObjItem, callback: (sisaUang: number) => void) {
  console.log("Saya membawa uang sebesar Rp." + money)
  console.log(`saya ingin membeli ${objItem.item}`)
  console.log(`dengan harga Rp.${objItem.price}`)
  console.log(`dan waktu yang dibutuhkan adalah ${objItem.time / 1000} detik\n`);

  let uangSekarang = money

  setTimeout(() => {
    uangSekarang -= objItem.price
    callback(uangSekarang)
  }, objItem.time);
}
buyApparel(150000, clothes, (sisaUang1) => {
  buyApparel(sisaUang1, pants, (sisaUang2) => {
    buyApparel(sisaUang2, hat, (sisaUang3) => {
      buyApparel(sisaUang3, shoes, (sisaUang4) => {
        console.log(`sisa kembalian adalah Rp.${sisaUang4}`)
      })
    })
  })
})