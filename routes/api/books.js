const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router
  .route("/");

module.exports = router;