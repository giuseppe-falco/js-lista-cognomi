// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//richiesta cognome
var cognome = prompt("Inserisci il tuo cognome!");

//lista cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//inserimento in array
    //prima lettera maiuscola 
    cognome = (cognome.charAt(0).toUpperCase() + cognome.slice(1));
listaCognomi.push(cognome);

//ordinamento lista cognomi
var ordine = listaCognomi.sort();


//stampo lista
for(var i = 0; i < listaCognomi.length; i++) {
    document.getElementById('lista-cognomi').innerHTML += "<li>" + ordine[i] + "</li>";
}


//calcolo posizione corrente
var position = listaCognomi.indexOf(cognome) + 1;

// alternativa più lunga e complessa
// i = 0;
// var position, condition = false;

// while (condition == false) {
//   if (cognome == listaCognomi[i]) {
//     condition = true;
//     position = ++i;
//   }
//   i++;
// }


//stampa posizione corrente
alert("Il tuo cognome si trova nella posizione n." + position);