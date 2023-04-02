// soal no 1

for (let angka = 1; angka <= 100; angka++) {
    console.log(angka);
  }
  

//   soal no 2
  
for (let angka= 0; angka <= 10; angka++) {
    console.log(angka +2) 
    }

    // soal no 3

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
          console.log(i + " adalah bilangan genap");
        } else {
          console.log(i + " adalah bilangan ganjil");
        }
      }

// soal no 4

let jawabanBenar = "Impact Byte";
let jawabanUser = "";

while (jawabanUser !== jawabanBenar) {
  jawabanUser = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
  
  if (jawabanUser === jawabanBenar) {
    alert("Selamat jawaban kamu benar");
  } else {
    alert("Jawaban kamu salah, silakan coba lagi");
  }
}
      