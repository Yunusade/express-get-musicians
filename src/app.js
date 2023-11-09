const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");
const musicianRouter = require("../routes/musicians");

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/musicians", musicianRouter)
app.use("/musicians/:id", musicianRouter)

module.exports = app;
