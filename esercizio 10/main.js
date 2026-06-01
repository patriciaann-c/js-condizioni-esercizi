let ore_parcheggio = prompt("Inserisci il numero di ore da effettuare nel parcheggio");
let parcheggio = Number(ore_parcheggio);
let message;

if (parcheggio <= 2) {
    message = "Il parcheggio costa 5€"
}
else if (parcheggio <= 5) {
    message = "Il parcheggio costa 10€"
} else {
    message = "Il parcheggio costa 15€"
}

console.log(message);
