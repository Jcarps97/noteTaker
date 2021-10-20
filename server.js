const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const { readAndAppend } = require("./utils/fsUtils");
let allNotes = require("./db/db.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


app.get('/api/notes', (req, res) => {
    res.json(allNotes);
});

app.post('/api/notes', (req, res) =>{
    if (req.body) {
        readAndAppend(req.body, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.error('Error, cannot add note');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
})