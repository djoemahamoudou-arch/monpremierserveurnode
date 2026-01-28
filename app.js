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
// J'ajoute un middleware qui gère la sécurité d'accès
app.use((req,res,next)=>{


    //Je permet l'accès à mon API depuis n'import quel origin (a partir de mon serveur que j'ai crèer.)
    res.setHeader('Access-control-Allow-Origin' , '*');
  
   
    // J'autorise certaines en-têtes dans les requêtes reçues dans notre API.Les en-têtes autorisées sont :('origin, X-Requested-with,Content , Accept,content-type,Authorization).
    res.setHeader('Access-control-Allow-Hearders' , 'Origin,X-Requested-With,Content,Accept, Content-Type,Authorization');



    //J'autorise d'envoyer des requêtes avec les méthodes :'GET,POST,PUT,DELETE,PATCH,OPTION'
    res.setHeader('Acess-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTION');
    
    next();
});



app.get('/api/fruit',(req,res) => {
    console.log("Je passe dans la route /api/fruit");
    // mon fruit
    const fruit = [
        {
            id:1,
            nom:"pomme",
            descrption: "fruit saisonner rieche en vitamine c",
            prix:3
        },

       
        {
            id:2,
            nom:"feliki",
            description:"feuille ",
            prix:1,
        }



        
    ];

    // le (200) , c'est pour dire que je suis content.
    res.status(200).json(fruit);

});




// J'ai fait avec la methode POST


app.post('/api/fruit',(req,res,) =>{
    console.log("mon route internationale");
    const legume = [
       {
        nom:"fruitapain",
        descriptions : "mangavou",
        prix:3




       } 




    ];
    res.status(201).json(legume);


   
  

})





app.put('/api/fruit',(req,res)=>{

    const vegetation = [
        {
            nom : "dipeh",
            descripton:"nguanom",
            prix:5
        }
    ];

    res.status(200).json(vegetation);
});







// J'export l'application express sous forme de module
module.exports = app;



