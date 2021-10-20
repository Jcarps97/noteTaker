const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));