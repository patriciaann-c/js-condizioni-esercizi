 # Esercizio 4
Un parco divertimenti richiede un'altezza minima di 140cm e almeno 14 anni per le montagne russe. Chiedi questi dati all'utente e stampa se può accedere alle montagne russe.

## Esecuzione
- Chiediamo l'altezza e l'età dell'utente
- SE ha un'altezza maggiore e uguale a 140 cm e SE ha l'età maggiore o uguale a 14 anni
    - stampiamo "Puoi accedere alle montagne russe"
- ALTRIMENTI stampiamo "Mi dispiace, non puoi accedere alle montagne russe"

## Codifica
``` js
const altezza = prompt("Qual'e la tua altezza?")
const eta = prompt("Qual'e la tua età?")

if (altezza >= 140 && eta >= 14) {
    console.log("Puoi accedere alle montagne russe!");
}
else {
    console.log("Mi dispiace, non puoi accedere alle montagne russe!");
}
```