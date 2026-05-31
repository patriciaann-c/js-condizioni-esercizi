# Esercizio 7
Chiedi all'utente che giorno è oggi. Se è "sabato" o "domenica" stampa "Buon weekend!", altrimenti stampa "Buon lavoro"

## Esecuzione
- Chiediamo all'utente che giorno é oggi
- SE il giorno inserito é sabato o SE il giorno é domenica
    - stampiamo "Buon weekend!"
- ALTRIMENTI stampiamo "Buon lavoro"

## Codifica 
``` js
let day = prompt("Che giorno é oggi?");
day = day.trim();
let message;

if (day === "sabato" || day === "domenica") {
    message = "Buon weekend!";
} else {
    message = "Buon lavoro!";
}

console.log(message);
```