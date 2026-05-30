# Esercizio 1

Chiedi l'età dell'utente tramite prompt. Se l'utente è maggiorenne, stampa a console "Accesso consentito al locale".

## Ragionamento
- Chiediamo l'età dell'utente
- SE l'utente ha letà maggiore o uguale di 18
    - stampiamo "Accesso consentito al locale"

## Codifica
``` js
const age = prompt("Quanti anni hai?")

if (age >= 18) {
    console.log("Accesso consentito al locale");
}
else {
    console.log("Accesso negato al locale");
}
```