function setup() {
  // Atur ukuran kanvas
  createCanvas(640, 480);
  
  // Atur warna latar belakang menjadi ungu
  background(128, 0, 128);
  
  // Tentukan posisi tengah kanvas
  let centerX = width / 2;
  let centerY = height / 2;
  
  // Tentukan ukuran radius heksagon
  let radius = 100;
  
  // Gambar heksagon
  drawHexagon(centerX, centerY, radius);
}

function drawHexagon(x, y, radius) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let vx = x + cos(angle) * radius;
    let vy = y + sin(angle) * radius;
    vertex(vx, vy);
  }
  endShape(CLOSE);
}
