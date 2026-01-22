//Ici on va créer notre appllication ExpresseJs


// J'import le framework ExpressJs
const express =  require('express');




// J'initialise une application 'express()'
const app = express();

app.use((req,res) =>{
    res.end("bonjour, je suis le serveur ! rachid");

});
    



// J'export l'application express sous forme de module
module.exports = app;



