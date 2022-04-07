const sql = require("./db.js");
// constructor
const Contact = function(tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};
Contact.create = (newContact, result) => {
  sql.query("INSERT INTO tutorials SET ?", newContact, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created tutorial: ", { id: res.insertId, ...newContact });
    result(null, { id: res.insertId, ...newContact });
  });
};
Contact.findById = (id, result) => {
    sql.query(`SELECT * FROM Contacts WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found tutorial: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  };
  Contact.getAll = (title, result) => {
    let query = "SELECT * FROM Contacts";
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("tutorials: ", res);
      result(null, res);
    });
  };
  module.exports = Contact;