let frases = [
    "Frase1",
    "Frase2",
    "Frase3"
]

function obtieneFrase(indice){

    return frases[indice];
}


console.log(frases);

module.exports.obtieneFrase = obtieneFrase;