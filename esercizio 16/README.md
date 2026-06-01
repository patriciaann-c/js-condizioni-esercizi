# Esercizio 16
Chiedi il saldo attuale e l'importo da prelevare. Prima verifica se l'importo è positivo. Se lo è, verifica se il saldo è sufficiente. Se sì, stampa "Prelievo effettuato" e il nuovo saldo, altrimenti stampa "Saldo insufficiente".

## Esecuzione
- Chiediamo il saldo attuale e l'importo da prelevare
- Chiediamo se l'importo é positivo
- SE é positivo
    - verifichiamo SE il saldo é sufficiente e stampiamo "Prelievo effettuato" e il nuovo saldo
    - ALTRIMENTI stampiamo "Saldo insufficiente"



## Codifica
``` js
let textBalance = prompt("Inserisci l'importo del tuo saldo attuale");
let balance = Number(textBalance);

if (balance > 0) {
    let textMoney = prompt("Inserisci l'importo da prelevare");
    money = Number(textMoney);
    if (balance >= money) {
        balance = balance - money
        console.log("Prelievo effettuato!", "Il tuo saldo é", balance);
    }
    else {
        console.error("Saldo insufficiente");
    }
}
else {
    console.warn("Importo inserito non valido");
}
```