const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const saucesRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');



mongoose.connect('mongodb+srv://sopekockoadm:Dw7bgMAvhHpxi1e4lXxk@cluster0.1vowr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //Header permettant d'accéder à notre API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // d'ajouter les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //d'envoyer des requêtes avec les méthodes mentionnées
  next();
});

//Transforme le corps de la requête en objet JS utilisable
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

//Route pour poster une sauce sur l'application
// app.post('/api/sauces', (req, res, next) => {
//   delete req.body._id;
//   const sauces = new Sauce({
//     name: req.body.name,
//     imageUrl: req.body.imageUrl
//   });
//   sauces.save()
//     .then(() => res.status(201).json({ message: 'Votre sauce a été enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
// });

// Méthode pour tout type de requête
// app.use((req, res) => {
//    res.json({ message: 'Votre requête a bien été reçue !' }); 
// });


module.exports = app;



