const tessera = prompt("Hai la tessera fedeltà?");
let prezzo = prompt("Inserisci il prezzo");
prezzo = Number(prezzo)

if (tessera === "si") {
    prezzo = prezzo - (prezzo * 10 / 100)
}

console.log("Il prezzo da pagare é di", prezzo);