// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//richiesta cognome
var cognome = prompt("Inserisci il tuo cognome !");

//lista cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//inserimento in array
listaCognomi.push(cognome.charAt(0).toUpperCase() + cognome.slice(1));

console.log(listaCognomi)

var ordine = listaCognomi.sort();
//stampo lista
for(var i = 0; i < listaCognomi.length; i++) {
    document.getElementById('lista-cognomi').innerHTML += "<li>" + ordine[i] + "</li>";
}

//non valida
//stampa posizione corrente
alert("Il tuo cognome si trova nella posizione n." + i);