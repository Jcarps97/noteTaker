const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const { readAndAppend } = require("./utils/fsUtils");
let allNotes = require("./db/db.json");

//Baseline code that should be used in all call files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Getting note file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//Pulling Note history
app.get('/api/notes', (req, res) => {
    res.json(allNotes);
});

//Creating new notes
app.post('/api/notes', (req, res) =>{
    if (req.body) {
        readAndAppend(req.body, './db/db.json');
        res.json('Note added successfully');
        //Side column does not update
    } else {
        res.json('Error, cannot add note');
    }
});

//Wildcard call
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

//Port listener
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
})