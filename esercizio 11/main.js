let eta = prompt("Quanti anni hai?");
let genere = prompt("Qual'é il tuo genere? Inserisci M o F");
let message;

if ((eta >= "67" && genere === "M") || (eta >= "62" && genere === "F")) {
    message = "Puoi andare in pensione";
} else {
    message = "Devi ancora lavorare";
}

console.log(message);
