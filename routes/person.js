const mongoose = require("mongoose");

const express = require("express");

const { check, validationResult } = require("express-validator");

const Person = require("../models/Person");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("routes working");
});

router.post(
  "/",
  [
    check("firstname", "FirstName is Required").not().isEmpty(),
    check("lastname", "LasttName is Required").not().isEmpty(),
  ],
  (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      res.status(400).json(err.array());
    }
    const { firstname, lastname } = req.body;
    let person = new Person({
      firstname,
      lastname,
    });
    person
      .save()
      .then((per) => res.json(per))
      .catch((err) => {
        console.log(err.message);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  }
);

router.get("/all", (req, res) => {
  Person.find()
    .then((per) => {
      res.json(per);
    })
    .catch((err) => {
      console.log(err.message);
      return res.status(500).send("Internal Server Error");
    });
});

router.delete("/:id", (req, res) => {
  Person.findById(req.params.id)
    .then(() => {
      Person.findByIdAndRemove(req.params.id)
        .then(() => res.send("Deleted Sucessfully"))
        .catch((err) => {
          console.log(err.message);
          res.send("Deletion failed");
        });
    })
    .catch((err) => {
      console.log(err.message);
      res.send("Person not found");
    });
});

router.put("/:id", (req, res) => {
  const { firstname, lastname } = req.body;
  const person = {};
  if (firstname) person.firstname = firstname;
  if (lastname) person.lastname = lastname;
  Person.findById(req.params.id)
    .then(() => {
      Person.findByIdAndUpdate(req.params.id, { $set: person }, { new: true })
        .then(() => res.send("Update Sucessful"))
        .catch((err) => {
          console.log(err);
          res.send("Update unsucessful");
        });
    })
    .catch((err) => {
      console.log(err.message);
      res.send("person not found");
    });
});

module.exports = router;
