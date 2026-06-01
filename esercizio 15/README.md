# Esercizio 15
Chiedi la temperatura esterna. Se fa freddo (< 15°C), chiedi se piove. Se piove stampa "Metti l' impermeabile", altrimenti "Metti la giacca". Se non fa freddo (>= 15°C), stampa "Vai leggero".

## Esecuzione
- Chiediamo la temperatura esterna
- SE fa freddo (<15 gradi)
    - chiedi se piove
    - SE piove
         stampiamo "Metti l'impermeabile"
    - ALTRIMENTI stampiamo "Metti la giacca"
- SE non fa freddo (>= 15 gradi)
    - stampiamo "Vai leggero"

## Codifica
``` js
let temperatura = prompt("Qual'é la temperatura esterna in gradi?");

if (temperatura < "15") {
    let piove = prompt("Sta piovendo? (si/no)");
    if (piove === "si") {
        console.log("Metti l'impermeabile");
    } else {
        console.log("Metti la giacca");
    }
}
else if (temperatura >= "15") {
    console.log("Vai leggero");
}
```