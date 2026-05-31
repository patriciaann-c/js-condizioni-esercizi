# Esercizio 5
Chiedi l'età all'utente. Se è minorenne stampa "Ciao", se è over60 stampa "Salve", altrimenti stampa "Benvenuto".

## Esecuzione
- Chiediamo l'età all'utente
- SE l'utente ha l'età minore di 18
    - stampiamo "Ciao"
- ALTRIMENTI SE ha letà maggiore di 60
    stampiamo "Salve"
- ALTRIMENTI stampiamo "Benvenuto"

## Codifica
``` js
const eta = prompt("Quanti anni hai?")

if (eta < 18) {
    console.log("Ciao");
}
else if (eta > 60) {
    console.log("Salve");
}
else {
    console.log("Benvenuto");
}
```