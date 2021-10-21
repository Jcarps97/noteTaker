// NOT ACTUALLY USED, JUST FOR DEMO OF INDEX.JS STRUCTURE

const express = require('express');
const app = express();
const { readAndAppend } = require("../utils/fsUtils");

app.post('/api/notes', (req, res) =>{
    if (req.body) {
        readAndAppend(req.body, '../db/db.json');
        res.json('Note added successfully');
    } else {
        res.json('Error, cannot add note');
    }
});

module.exports = app;