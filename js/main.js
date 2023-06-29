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

//aggiungere due numeri da concatenare per il numero finale
let firstnumber = prompt('scegli un numero "possibilmente pari"');
let secondnumber = prompt('scegli un altro numero "possibilmente sempre pari"');

//i numeri arrivati dal prompt sono sotto forma di testo, quindi devo modificarli in numeri
parseInt(firstnumber);
parseInt(secondnumber);

//divido il first number per il second number (era 21, modificato per l'obbiettivo bonus)
let securitynumber = firstnumber / secondnumber;

//unione delle variabili e formazione della password

let password = nameUser + surnameUser + favoritecolorUser + securitynumber;

//stampo su console

console.log(password);

document.getElementById("password").innerHTML = password
