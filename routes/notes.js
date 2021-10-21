const express = require('express');
const app = express();
let allNotes = require("../db/db.json");
const { readAndAppend, readFromFile } = require("../utils/fsUtils");

app.get('/', (req, res) => {
    // readFromFile form utils
    // respond with data from readFromFile
    res.json(allNotes);
    readFromFile("../db/db.json") //Working on a way to call db.json so sidebar updates with entries
});

app.post('/', (req, res) =>{
    if (req.body) {
        readAndAppend(req.body, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.json('Error, cannot add note');
    }
});

module.exports = app;
