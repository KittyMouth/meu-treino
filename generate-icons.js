// Script para gerar ícones da PWA via canvas (Node.js + canvas)
// Execute: node generate-icons.js
// Requer: npm install canvas

const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function gerarIcone(tamanho, arquivo) {
  const canvas = createCanvas(tamanho, tamanho);
  const ctx = canvas.getContext('2d');

  // Fundo azul
  ctx.fillStyle = '#3b82f6';
  ctx.beginPath();
  ctx.roundRect(0, 0, tamanho, tamanho, tamanho * 0.2);
  ctx.fill();

  // Letras "MT"
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${tamanho * 0.4}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MT', tamanho / 2, tamanho / 2);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(arquivo, buffer);
  console.log(`Ícone gerado: ${arquivo}`);
}

const dir = path.join(__dirname, 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

gerarIcone(192, path.join(dir, 'icon-192.png'));
gerarIcone(512, path.join(dir, 'icon-512.png'));
