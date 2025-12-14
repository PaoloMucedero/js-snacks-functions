/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

/* Aperto ticket per verifica */ 
// Dichiara la funzione qui. 
function getIniziali(nameArray){
    let result = [];
    for(let i = 0; i < nameArray.length; i++){
        result.push(nameArray[i][0]);
    }
    return result;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(getIniziali(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]