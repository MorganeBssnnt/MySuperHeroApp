//importation du module express.js
import express from 'express';
import superheroRoutes from './routes/superHeroRoutes.js';

//création d'une constante app qui va contenir l'application express.js
const app = express();

//la variable port est utilisée pour définir le port sur lequel le serveur va écouter les requêtes le choix du port est arbitraire.
const port = 3000;

app.use('/superHeros', superheroRoutes);

//Mise en place d'un console log pour indiquer que le serveur est en écoute sur le port que nous avons défini.
app.listen(port, () => console.log(`En écoute sur le port ${port}!`));

//création de l'application express.js
app.use(express.json());