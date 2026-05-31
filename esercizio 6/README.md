# Esercizio 6
Chiedi se l'utente ha la tessera fedeltà. Se ha la tessera applica uno sconto del 10% al prezzo inserito, altrimenti lascia il prezzo intero. Stampa il prezzo.

## Esecuzione
- Chiediamo se l'utente ha la tessera fedeltà
- Chiediamo il prezzo all'utente
- SE l'utente ha la tessera
    - applichiamo uno sconto del 10% al prezzo
- Stampiamo il  prezzo

## Codifica
``` js
const tessera = prompt("Hai la tessera fedeltà?");
let prezzo = prompt("Inserisci il prezzo");
prezzo = Number(prezzo)

if (tessera === "si") {
    prezzo = prezzo - (prezzo * 10 / 100)
}

console.log("Il prezzo da pagare é di", prezzo);
```