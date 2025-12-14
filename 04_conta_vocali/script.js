/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(string) { /* La funzione conta vocali di una data stringa */
    let count = 0;/* Il conto deve ovviamente partire da zero */

    for (let i = 0; i < string.length; i++) {/* Ciclo for per contare le vocali dentro la stringa, trattata come array */
        if (
            string[i] === "a" ||/* segno di differenza OR */
            string[i] === "e" ||
            string[i] === "i" ||
            string[i] === "o" ||
            string[i] === "u"
        ) {
            count++;/* Variabile per aumentare il contatore man mano che trova vocali */
        }
    }

    return count;/* Salvataggio risultato del conteggio vocali a fine ciclo */
}


// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)