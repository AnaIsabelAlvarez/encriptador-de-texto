// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
let texto = document.getElementById("texto").value;
let mensaje = document.getElementById("mensaje");


function encriptar() {

  let textoCifrado = texto
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat");

if (texto.length != 0) {
  document.getElementById("mensaje").value = textoCifrado;
} else {;
  mensaje.textContent = "";    
}
}

function desencriptar() {

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("mensaje").value = textoCifrado;
    } else {
      mensaje.textContent = "";
    }
}

function copiar() {
  var input = document.getElementById("mensaje").value;
  navigator.clipboard.writeText(input);     
  alert("Texto copiado: " + input);
}