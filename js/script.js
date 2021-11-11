//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito.
//Infine scrivi sulla pagina nomecognomecolorepreferito21

//Variable declaration
//User Name
const userName = prompt('Scrivi il tuo nome');

//User Surname
const userSurname = prompt('Scrivi il tuo cognome');


//User Favourite color
const userFavouriteColor = prompt('Scrivi il tuo colore preferito');


//Logic
//User Password
const userPassword = `${userName}` + `${userSurname}` + `${userFavouriteColor}` + 21 ;
console.log(userPassword);


//Output
document.getElementById('my_password').innerHTML = userPassword;