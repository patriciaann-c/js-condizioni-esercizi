let day = prompt("Che giorno é oggi?");
day = day.trim();
let message;

if (day === "sabato" || day === "domenica") {
    message = "Buon weekend!";
} else {
    message = "Buon lavoro!";
}

console.log(message);