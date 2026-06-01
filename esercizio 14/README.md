# Esercizio 14
Chiedi il totale del carrello e-commerce. Se la spesa è superiore a 50€, stampa "Spedizione gratuita", altrimenti calcola e stampa un costo di spedizione fisso di 5€

## Esecuzione
- Chiediamo il prezzo totale del carrello
- SE la spesa é > 50€
    - stampiamo "Spedizione gratuita"
- ALTRIMENTI calcoliamo e stampiamo un costo di spedizione fisso di 5€

## Codifica
``` js
let prezzo_totale = prompt("Qual è il totale della tua spesa?");
let fisso = 5
let prezzo_fisso = Number(fisso) + Number(prezzo_totale)

if (prezzo_totale > 50) {
    console.log("Congratulazioni! Hai diritto alla spedizione gratuita");

} else {
    console.log("La tua spesa totale compresa di spedizione é di", prezzo_fisso, "euro");
}
```