const express = require("express");
const mongoose = require("mongoose");
const Main = require("./Models/Main");
const cors = require('cors');
const port = 3001;
const app = express();

const connectionString = "mongodb+srv://karim:wswuibcIA9wFx7E1@advertisingagency.hmbtuyu.mongodb.net/Main?retryWrites=true&w=majority&appName=AdvertisingAgency";

mongoose.connect(connectionString)
    .then(() => {
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

app.use(cors());
// Middleware to parse URL-encoded data and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST endpoint to create a new entry
app.post('/main', (req, res) => {
    console.log('Request Body:', req.body); // Log request body to debug
    const main = new Main(req.body);
    main.save()
        .then((result) => {
            res.status(201).json(result);  // Send the created resource with 201 status
        })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                res.status(400).json({ error: err.message });  
            } else {
                res.status(500).json({ error: err.message });  
            }
        });
});

// GET endpoint to retrieve all entries
app.get('/main', (req, res) => {
    Main.find()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
});
