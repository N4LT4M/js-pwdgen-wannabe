/*Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
Infine scrivi sulla console nomecognomecolorepreferito21

salvare informazioni dell'utente tramite variabile let e prompt

- nome
- cognome
- colore preferito

unire le stringe e aggiungere 21 usando l'operatore di concatenazione +  */

//inizio
//prompt
let nameUser = prompt("qual'è il tuo nome?");
let surnameUser = prompt("qual'è il tuo cognome?");
let favoritecolorUser = prompt("qual'è il tuo colore preferito?");

//numero da aggiungere alla password
let securitynumber = 21;

//unione delle variabili e formazione della password

let password = nameUser + surnameUser + favoritecolorUser + securitynumber;

//stampo su console

console.log(password);
