// Import express module
import express from 'express';
// Import the 'fs' module for file operations
import fs from 'fs';

// Create a new router instance
const router = express.Router();

// Route GET /superHeros
// Renvoie tous les Super Héros
router.get('/', (req, res) => {
    // Read the JSON file
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Extract the 'superHeros' array
        const superHeros = jsonData.superHeros;

        // Send the list of superHeros as JSON response
        res.json(superHeros);
    });
});

// Route GET /superHeros/:id
// Renvoie un Super Héros en fonction de son id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Details of Super Hero with id ${id}`);
});

// Route POST /superHeros
// Créer un Super Héros
router.post('/', (req, res) => {
    res.send('Super Hero created successfully');
});

// Route PUT /superHeros/:id
// Modifie un Super Héros en fonction de son id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Super Hero with id ${id} updated successfully`);
});

// Route DELETE /superHeros/:id
// Supprime un Super Héros en fonction de son id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Super Hero with id ${id} deleted successfully`);
});

// Export the router instance
export default router;
