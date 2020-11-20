const db = require("../models");

const catchResponse = (err, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(422).json(err);
  }
  return res.status(err.code).json(err);
}

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => catchResponse(err, res));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      })
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}