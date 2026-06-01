let testo_vote = prompt("Inserisci un voto da 1 a 10");
let vote = Number(testo_vote);

if (vote < 6) {
    console.log("Insufficiente");
}
else if (vote >= 6 && vote <= 7) {
    console.log("Sufficiente");
}
else if (vote >= 8 && vote <= 9) {
    console.log("Buono");
}
else if (vote == 10) {
    console.log("Ottimo");
}
else {
    console.log("Numero non valido come voto");
}