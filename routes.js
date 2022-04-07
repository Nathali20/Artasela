module.exports = app => {
    const Contacts = require("../controllers/controllers.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", Contacts.create);
    // Retrieve all Tutorials
    router.get("/", Contacts.findAll);
    // Retrieve all published Tutorials
    router.get("/published", Contacts.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", Contacts.findOne);


    app.use('/api/Contacts', router);
  };