const express = require("express");
const router = express.Router();
const { Musician } = require("../models");

router.get("/", async (req, res) => {
  const allMusicians = await Musician.findAll();
  res.json(allMusicians);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const foundMusician = await Musician.findByPk(id);
  res.json(foundMusician);
});

router.post('/', async(req, res) => {
  const createdMusicians = await Musician.create(req.body);
  res.json(createdMusicians)
})

router.put("/:id", async(req, res) => {
  const updatedMusician = await Musician.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(updatedMusician);
})

router.delete("/:id", async (req, res) => {
  const deletedMusician = await Musician.destroy({ where: req.params.id });
  res.json(deletedMusician);
});

module.exports = router;
