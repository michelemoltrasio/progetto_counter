// valore iniziale del counter
let valore = 0;

// creo gli elementi con JavaScript
const app = document.getElementById("app");

const box = document.createElement("div");
box.className = "counter";

const numero = document.createElement("h1");
numero.textContent = valore;

const bottonePiu = document.createElement("button");
bottonePiu.textContent = "+";

const bottoneMeno = document.createElement("button");
bottoneMeno.textContent = "−";

box.appendChild(numero);
box.appendChild(bottoneMeno);
box.appendChild(bottonePiu);
app.appendChild(box);

// funzioni per cambiare il valore
function aumenta() {
  valore = valore + 1;
  numero.textContent = valore;
}

function diminuisci() {
  valore = valore - 1;
  numero.textContent = valore;
}

bottonePiu.addEventListener("click", aumenta);
bottoneMeno.addEventListener("click", diminuisci);
