//Ici on va créer notre appllication ExpresseJs


// J'import le framework ExpressJs
const express =  require('express');




// J'initialise une application 'express()'
const app = express();


//J'ai utiliser un Middleware 1 pour afficher dans mon git bash.

app.use((req, res, next) =>{
    console.log("je suis un middleware dans le serveur ! rachid");
    next();
    

});

// j

/*J'ai utiliser "res.json()" pour que afficher que le "json dans ma page web ou dans postman", quand on fait localhost:3000.
//app.use((req, res,next) =>{
    res.json({message:"salut vous être bien dans le serveur rachid"})
    next();
});*/


// On a utiliser "res.end" c'est mon pour le dernier
app.use((req, res,next) =>{
    console.log("bonjour, je suis le serveur ! rachid");
    next();

    
});   

app.use('/api/fruit',(req,res,next) => {
    console.log("Je passe dans la route /api/fruit");
    next();
    

});

app.use('/api/fruit',(req,res) => {
    console.log("Je passe dans la route /api/fruit");
    // mon fruit
    const fruit = [
        {
            id:1,
            nom:"pomme",
            descrption: "fruit saisonner rieche en vitamine c",
            prix:3
        }





        
    ];
    res.json(fruit);

});


// J'export l'application express sous forme de module
module.exports = app;



