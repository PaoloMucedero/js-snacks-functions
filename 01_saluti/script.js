/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluti(name){
    return "ciao " + name;
}

// FUNZIONE ARROW
const saluta = name => "ciao " + name


// Invoca la funzione qui e stampa il risultato in console
console.log (saluti(userName))
//saluta(userName);/* Perché funziona lo stesso se commento questa parte? */
console.log(saluta(userName))

//Risultato atteso se si passa 'Mario': // ciao Mario
