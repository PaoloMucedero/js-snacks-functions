/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

/* Aperto ticket per verifica */ 
// Dichiara la funzione qui. 
function getIniziali(namesArray){
    let result = [];
    for (let i = 0; i < namesArray.length; i++)
        result.push(namesArray[i][0]);
}
return

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]