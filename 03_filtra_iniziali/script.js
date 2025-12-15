/* Scrivi una funzione che accetti un'array di stringhe e una lettera 
   e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Funzione che filtra le parole che iniziano con la lettera specificata
function wordsStartingWithLetter(array, letter) {
    let result = []; // Creo un array vuoto per salvare i risultati

    // Scorro tutti gli elementi dell'array
    for (let i = 0; i < array.length; i++) {
        // Controllo se la prima lettera dell'elemento corrente è uguale a quella cercata
        if (array[i][0] === letter) {
            // Se sì, aggiungo l'elemento all'array dei risultati
            result.push(array[i]);
        }
    }

    // Restituisco l'array dei risultati
    return result;
}

// Invocazione della funzione e stampa del risultato in console
console.log(wordsStartingWithLetter(names, "A"));

// Risultato atteso: ["Anna", "Adele", "Alessandra"]