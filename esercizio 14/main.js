let prezzo_totale = prompt("Qual è il totale della tua spesa?");
let fisso = 5
let prezzo_fisso = Number(fisso) + Number(prezzo_totale)

if (prezzo_totale > 50) {
    console.log("Congratulazioni! Hai diritto alla spedizione gratuita");

} else {
    console.log("La tua spesa totale compresa di spedizione é di", prezzo_fisso, "euro");
}