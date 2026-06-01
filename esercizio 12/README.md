# Esercizio 12
Simula il lancio di una moneta. Se il numero è minore di 0.5 stampa "Testa", altrimenti stampa "Croce".

## Esecuzione
- Stiamo simulando il lancio di una moneta
- SE il numero uscito é minore di 0.5
    - stampiamo "Testa"
- ALTRIMENTI stampiamo "croce"

## Codifica
``` js
const coin = Math.random();

if (coin < 0.5) {
    console.log("Testa");
} else {
    console.log("Croce");
}
```