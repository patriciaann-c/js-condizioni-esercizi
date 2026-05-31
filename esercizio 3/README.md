# Esercizio 3
 Chiedi un numero all'utente. Controlla se è negativo, positivo o neutro 

## Esecuzione
- Chiedi all'utente un numero
- SE il numero é minore di 0
    - stampiamo "Il numero é negativo"
- ALTRIMENTI SE il numero é maggiore di 0
    - stampiamo "Il numero é positivo"
- ALTRIMENTI
    - stampiamo "Il numero é neutro"

## Codifica
``` js
const num = prompt("Inserisci un numero");

if (num < 0) {
    console.log("Il numero é negativo");
}
else if (num > 0) {
    console.log("Il numero é positivo");
}
else {
    console.log("Il numero é neutro");
}
```