# Esercizio 
Chiedi l'età e il genere ("M" o "F"). Se è uomo e ha >= 67 anni o donna e ha >= 62 anni, stampa "Puoi andare in pensione", altrimenti "Devi ancora lavorare".

## Esecuzione
- Chiediamo l'età e il genere
- SE é "M" e ha >= 67 anni oppure é "F" e ha >= 62 anni
    - stampiamo "Puoi andare in pensione"
- ALTRIMENTI stampiamo "Devi ancora lavorare"

## Codifica
``` js
let eta = prompt("Quanti anni hai?");
let genere = prompt("Qual'é il tuo genere? Inserisci M o F");
let message;

if ((eta >= "67" && genere === "M") || (eta >= "62" && genere === "F")) {
    message = "Puoi andare in pensione";
} else {
    message = "Devi ancora lavorare";
}

console.log(message);
```