# Esercizio 13
Chiedi all'utente di inserire il suo nome. Verifica che non abbia lasciato il campo vuoto

## Esecuzione
- Chiediamo all'utente il suo nome
- Verifichiamo che non abbia lasciato il campo vuoto

## Codifica
``` js
const nome = prompt("Inserisci il tuo nome");

if (nome) {
    console.log("Il tuo nome é", nome);
} else {
    console.warn("Nessun nome inserito");
}
```