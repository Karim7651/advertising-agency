const express = require("express");
const mongoose = require("mongoose");
const Main = require("./Models/Main");
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Set up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// POST endpoint to create a new entry with an image
app.post('/main', upload.single('image'), (req, res) => {
    const { Title, Description, Instagram, Facebook, X } = req.body;
    const image = req.file ? req.file.filename : null;

    const main = new Main({
        Title,
        Description,
        Instagram,
        Facebook,
        X,
        Image: image
    });

    main.save()
        .then((result) => {
            res.status(201).json(result);
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
