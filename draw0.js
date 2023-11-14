// Získání reference k HTML canvas elementu s id 'myCanvas'
let canvas = document.getElementById('myCanvas');

// Získání 2D vykreslovacího kontextu pro canvas
let ctx = canvas.getContext('2d');

// Nastavení barvy výplně na šedou
ctx.fillStyle = '#DCDCDC';

// Vykreslení obdélníka, který pokryje celý canvas touto šedou barvou
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Přidání posluchače událostí k celému dokumentu pro detekci stisku klávesy
document.addEventListener("keydown", function(event) {
  console.log(event);
  // Kontroluje, zda byla stisknuta klávesa Escape
  if (event.code === "Escape") {
    // Pokud ano, znovu vykreslí celý canvas šedou barvou
    ctx.fillStyle = "#DCDCDC"; // Nastavte barvu zpět na šedou
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return; // Ukončení funkce
  }

  switch (event.code) {
    case "KeyA":
      drawSS();
      break;

    case "KeyS":
      drawCI();
      break;

    case "KeyD":
      drawEye(Math.random() * canvas.width, Math.random() * canvas.height,f);
      break;
  }
});

const f = 0.1;

function drawEye(l, m, fs) {
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  let coll = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  let x = l;
  let y = m;

  let r = 30 * fs;
  let h = 70 * fs;
  let w = 180 * fs;

  drawEllipse(x, y, w, h, coll);
  drawCircle(x, y, r, col);
}

function drawSS() {
  let l = 0;
  let m = 0;
  let i = 0;
  do {
    drawEye(l, m, f);
    if (m > canvas.height) {
      l += 180 * f;
      m = 0;
    }
    m += 70 * f;
    i++;
  } while (i < 10000);
}

function drawCI() {
  let wi = Math.random() * canvas.width;
  let he = Math.random() * canvas.height;
  let i = 1;
  let cols = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  function drawNextCircle() {
    drawCircle(he, wi, i, cols);
    i += 1;

    if (i < 70) {
      // Zpoždění mezi kroky cyklu (např. 100 ms)
      setTimeout(drawNextCircle, 10);
    }
  }

  drawNextCircle();
}



// Funkce pro vykreslení obdélníka na plátno s danými parametry
function drawRectangle(x, y, w, h, col) {
  // Nastavení barvy výplně pro obdélník
  ctx.fillStyle = col;
  // Vykreslení obdélníka na plátno s danými souřadnicemi (x, y),
  // šířkou (w) a výškou (h)
  ctx.fillRect(x, y, w, h);
}

// Funkce pro vykreslení elipsy na plátno s danými parametry
function drawEllipse(x, y, w, h, col) {
  // Nastavení barvy výplně pro elipsu
  ctx.fillStyle = col;
  // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
  ctx.beginPath();
  // Vykreslení elipsy s centrem v bodě (x, y), s horizontálním poloměrem (w / 2),
  // vertikálním poloměrem (h / 2) a úhlem od 0 do 2π (což je celý kruh)
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
  // Vyplnění elipsy nastavenou barvou
  ctx.fill();
}

// Funkce pro vykreslení kruhu na plátno s danými parametry
function drawCircle(x, y, r, col) {
  // Nastavení barvy výplně pro kruh
  ctx.fillStyle = col;
  // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
  ctx.beginPath();
  // Vykreslení kruhu s centrem v bodě (x, y), poloměrem (r) a úhlem od 0 do 2π
  // (což je celý kruh)
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  // Vyplnění kruhu nastavenou barvou
  ctx.fill();
}

// Funkce pro vykreslení čtverce na plátno s danými parametry
function drawSquare(x, y, s, col) {
  // Nastavení barvy výplně pro čtverec
  ctx.fillStyle = col;
  // Vykreslení čtverce na plátno s danými souřadnicemi (x, y) a rozměry (s x s)
  ctx.fillRect(x, y, s, s);
}
