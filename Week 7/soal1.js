const moduleSoal1 = require("./moduleSoal1.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan sisi persegi: ", (squareSide) => {
  var squareSide = parseInt(squareSide);
  console.info(`Luas persegi jika sisinya ${squareSide} adalah ${moduleSoal1.areaRSquare(squareSide)}`);
  console.info(`Keliling persegi jika sisinya ${squareSide} adalah ${moduleSoal1.perimeterSquare(squareSide)}`);

  console.info("================================================================================")

  rl.question("Masukkan panjang persegi panjang: ", (length) => {
    var length = parseInt(length);
    rl.question("Masukkan lebar persegi panjang: ", (width) => {
      var width = parseInt(width);
      console.info(`Luas persegi jika panjang ${length} dan lebar ${width} adalah ${moduleSoal1.areaRectangle(length,width)}`);
      console.info(`Keliling persegi jika panjang ${length} dan lebar ${width} adalah ${moduleSoal1.perimeterRectangle(length,width)}`);
      rl.close();
    });
  });
});