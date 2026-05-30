# Esercizio 2

Il costo del biglietto è di 36 €. Chiedi il peso della valigia in kg. Se il peso supera i 23kg, c'è un supplemento di 20 €, infine stampa il prezzo del biglietto

## Ragionamento
- Impostiamo il prezzo base del biglietto di 36€
- Leggiamo il peso della valigia
- SE il peso della valigia è più di 23kg
    - allora aggiungiamo un supplemento di 20€
- stampiamo il prezzo del biglietto

## Codifica
``` js
let prezzo_biglietto = 36;
const peso_valigia = prompt("Quanto pesa la tua valigia?");
console.log(peso_valigia)

if (peso_valigia > 23) {
    prezzo_biglietto = prezzo_biglietto + 20;
}
console.log(prezzo_biglietto);
```