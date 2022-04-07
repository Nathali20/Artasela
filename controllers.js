const Contact = require("../models/model.js");// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Tutorial
  const contact = new Contact({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });
  // Save Tutorial in the database
  Contact.create(contact, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;
    Contact.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
  exports.findAllPublished = (req, res) => {
    Contact.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
  };
// Find a single Tutorial with a id
exports.findOne = (req, res) => {
    Contact.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };