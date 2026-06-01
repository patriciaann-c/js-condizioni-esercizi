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