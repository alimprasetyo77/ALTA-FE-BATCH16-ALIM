import readline from 'readline';

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})

// Daftar pilihan
const daftarPilihan = ['Celcius', 'Fahrenheit', 'Kelvin'];

// Menampilkan pilihan 
console.log('Pilih salah satu jenis temperatur berikut:');
daftarPilihan.forEach((pilihan, index) => {
  console.log(`${index + 1}. ${pilihan}`);
});


rl.question("Pilihan : " , (pilihan) => {
  rl.question("Suhu : " , (suhu) => {
      const pilihanYgDipilih = daftarPilihan[parseInt(pilihan) - 1]
      const suhuDipilih = parseInt(suhu)

      if(pilihanYgDipilih === "Celcius"){
        const f = suhuDipilih * 9/5 + 32
        const k = suhuDipilih + 273.15
        console.log(`${suhuDipilih} ${pilihanYgDipilih} sama dengan ${f} Fahrenheit dan ${k} Kelvin`)
      }else if (pilihanYgDipilih === 'Fahrenheit'){
        const c = (suhuDipilih - 32) * 5/9
        const k = (suhuDipilih +  459.67) * 5/9
        console.log(`${suhuDipilih} ${pilihanYgDipilih} sama dengan ${c} Celcius dan ${k} Kelvin `)
      }else {
        const c = suhuDipilih - 273.15
        const f = suhuDipilih * 9/5 - 459.67
        console.log(`${suhuDipilih} ${pilihanYgDipilih} sama dengan ${c} Celcius dan ${f} Fahrenheit `)
      }

      rl.close()
    })
})