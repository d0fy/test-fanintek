const testFilter = () => {
  const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|<>\/~]/;
  const text1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan."; // 5
  const text2 = "Berapa u(mur minimal[ untuk !mengurus ktp?"; // 3
  const text3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda."; // 4
  const words = text1.split(" ");

  let result = [];
  for (let i = 0; i < words.length; i++) {
    const val = words[i];
    if (specialChars.test(val)) {
      console.log(val);
      console.log("Ada\n");
    } else {
      console.log(val);
      console.log("Ga Ada\n");
      result.push(val);
    }
  }
  console.log("Hasil: ", result);
  console.log("Jumlah: ", result.length);
};

testFilter();
