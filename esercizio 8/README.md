# Esercizio 8
Chiedi all'utente di inserire il PIN di 4 cifre. Se il PIN inserito é esattamente "1234" stampa "Accesso sbloccato", altrimenti stampa "Pin errato"

## Esecuzione
- Chiediamo all'utente di inserire il PIN
- Il PIN é "1234"
- SE il PIN é "1234"
    - stampiamo "Accesso sbloccato"
- ALTRIMENTI stampiamo "Pin errato"

## Codifica
``` js
const accessoPin = prompt("Inserisci il Pin per accedere alla piattaforma");
const pinCorretto = "1234";
let isCorrect = false;

if (accessoPin === pinCorretto) {
    isCorrect = true;
}

if (isCorrect) {
    alert("Accesso sbloccato");
} else {
    alert("Pin errato")
}
```