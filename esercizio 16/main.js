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