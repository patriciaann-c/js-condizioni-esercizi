const nome = prompt("Inserisci il tuo nome");

if (nome) {
    console.log("Il tuo nome é", nome);
} else {
    console.warn("Nessun nome inserito");
}