# Esercizio 10
Chiedi quante ore si resta nel parcheggio. Se sono <= 2 ore costa 5€, se sono <= 5 ore costa 10€, altrimenti costa 15€.

## Esecuzione
- Chiediamo quante ore resta nel parcheggio
- SE sono meno o uguale a 2 ore
    - stampiamo ("Il parcheggio costa 5€")
- SE sono meno o uguale a 5 ore
    - stampiamo ("Il parcheggio costa 10€")
- ALTRIMENTI stampiamo ("Il parcheggio costa 15€")

## Codifica
``` js
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
```
