const express = require('express');

const app = express();

const mongoose = require('mongoose');

// Méthode pour tout type de requête
app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});


mongoose.connect('mongodb+srv://sopekockoadm:Dw7bgMAvhHpxi1e4lXxk@cluster0.1vowr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


module.exports = app;



