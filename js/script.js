// DATA
const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);

const eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

const kmPrice = 0.21;
console.log(kmPrice);

const minorDiscount = 0.2;
console.log(minorDiscount);

const overDiscount = 0.4
console.log(overDiscount);


// LOGIC
let ticket;
ticket = km * kmPrice;
console.log(ticket);

if (eta < 18) {
    ticket = ticket - (ticket * minorDiscount);
} else if (eta >= 65) {
    ticket = ticket - (ticket * overDiscount);
}
console.log(ticket);

ticket = ticket.toFixed(2)  // reduce to 2 decimal
console.log(ticket);

const message = 
    `<h2>Ciao</h2>
    <p>Questo è il costo del tuo biglietto: ${ticket}</p>
    <p>Buon viaggio!</p>`
;


// OUTPUT
document.getElementById("train-ticket").innerHTML = message;