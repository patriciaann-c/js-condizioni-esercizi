const accessoPin = prompt("Inserisci il Pin per accedere alla piattaforma");
const pinCorretto = "1234";
let isCorrect = false;

if (accessoPin === pinCorretto) {
    isCorrect = true;
}

if (isCorrect) {
    alert("Accesso sbloccato");
} else {
    alert("Pin errato")
}