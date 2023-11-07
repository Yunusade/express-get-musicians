const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/musicians", async (req, res) => {
  const allMusicians = await Musician.findAll()
  res.json(allMusicians)
})


app.get("/musicians/:id", async (req, res) => {
  const id  = req.params.id;
  const foundMusician = await Musician.findByPk(id)
  res.json(foundMusician)
})

app.post("/musicians", async (req, res) => {
  const createdMusicians = await Musician.create(req.body)
  res.json(createdMusicians)
})

app.put("/musicians/:id", async (req, res) => {
  const updatedMusician = await Musician.update(req.body, {where: {id: req.params.id}})
  res.json(updatedMusician)
})

app.delete("/musicians/:id", async (req, res) => {
  const deletedMusician = await Musician.destroy({where: req.params.id})
  res.json(deletedMusician)
})
module.exports = app;