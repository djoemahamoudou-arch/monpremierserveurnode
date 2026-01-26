// Ici , je code mon serveur http 

// J'import le package (module) http. Le module HTPPest stoké dans la variable http.
// L'instruction require() permet d'importer le module.

const http = require('http');

//J'import l'application express app.JS
const app = require('./app')

const server = http.createServer(app);

const numPort = 3200;


//Je configure le numero du port utilisé dans le serveur 
app.set(numPort);




const date = new Date();
const heure = new Date();

// Maintenant , je crée mon serveur en utilisant le package HTTP
/*const server = http.createServer((req, res) => {
    res.end("Bonjour , je suis le serveur !");
});*/

// Je précise qu'elle adresse et le port du serveur 
server.listen(numPort, ()=> {
    console.log("Le serveur tourne sur le port :",numPort);
    console.log(date.toLocaleDateString(), heure.toLocaleTimeString());
});


