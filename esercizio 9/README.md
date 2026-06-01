# Esercizio 9
Chiedi un voto da 1 a 10. Stampa "Insufficiente" se < 6, "Sufficiente" se tra 6 e 7, "Buono" se tra 8 e 9, "Ottimo" se 10.

## Esecuzione
- Chiediamo all'utente di inserire un voto da 1 a 10
- SE il voto inserito é minore di 6
    - stampiamo "Insufficiente"
- ALTRIMENTI SE il voto inserito é tra 6 e 7
    - stampiamo "Sufficiente"
- ALTRIMENTI SE il voto inserito é tra 8 e 9
    - stampiamo "Buono"
- ALTRIMENTI SE il voto é 10
    - stampiamo "Ottimo" 

## Codifica
``` js
let testo_vote = prompt("Inserisci un voto da 1 a 10");
let vote = Number(testo_vote);

if (vote < 6) {
    console.log("Insufficiente");
}
else if (vote >= 6 && vote <= 7) {
    console.log("Sufficiente");
}
else if (vote >= 8 && vote <= 9) {
    console.log("Buono");
}
else if (vote == 10) {
    console.log("Ottimo");
}
else {
    console.log("Numero non valido come voto");
}
```