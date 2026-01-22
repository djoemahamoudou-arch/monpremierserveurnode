// Ici , je code mon serveur http 

// J'import le package (module) http. Le module HTPPest stoké dans la variable http.
// L'instruction require() permet d'importer le module.

const http = require('http');

// Maintenant , je crée mon serveur en utilisant le package HTTP

const server = http.createServer((req, res) => {
    res.end("Bonjour , je suis le serveur !");
});

// Je précise qu'elle adresse et le port du serveur 
server.listen(3000);

