import express from 'express';

const router = express.Router();

// Route GET /superHeros
// Renvoie tous les Super Héros
router.get('/superHeros', (req, res) => {
    res.send('List of all Super Heroes');
});

// Route GET /superHeros/:id
// Renvoie un Super Héros en fonction de son id
router.get('/superHeros/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Details of Super Hero with id ${id}`);
});

// Route POST /superHeros
// Créer un Super Héros
router.post('/superHeros', (req, res) => {
    res.send('Super Hero created successfully');
});

// Route PUT /superHeros/:id
// Modifie un Super Héros en fonction de son id
router.put('/superHeros/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Super Hero with id ${id} updated successfully`);
});

// Route DELETE /superHeros/:id
// Supprime un Super Héros en fonction de son id
router.delete('/superHeros/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Super Hero with id ${id} deleted successfully`);
});

export default router;
