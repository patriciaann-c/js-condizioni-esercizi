let prezzo_biglietto = 36;
const peso_valigia = prompt("Quanto pesa la tua valigia?");
console.log(peso_valigia)

if (peso_valigia > 23) {
    prezzo_biglietto = prezzo_biglietto + 20;
}
console.log(prezzo_biglietto);