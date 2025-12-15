/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

/* Aperto ticket per verifica */ 
// Dichiara la funzione qui. 
function getIniziali(nameArray){/* Funzione che cerca iniziali delle stringhe contenute in un array */
    let result = [];/* variabile che salva il risultato in un nuovo array */
    for(let i = 0; i < nameArray.length; i++){/* Ciclo per scorrere array e selezionare le iniziali delle stringhe  */
        result.push(nameArray[i][0]);/* .push serve per "spingere" il risultato in coda al nuovo array che verrà creato per contenere quel risultato */
    }
    return result;/* Salvo il risultato per richiamarlo in console quando serve */
}


// Invoca la funzione qui e stampa il risultato in console
console.log(getIniziali(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]