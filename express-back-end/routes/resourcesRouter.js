const express = require("express");
const router = express.Router();
const db = require("../lib/db");

// GET route for resources
router.get("/moods/:category", (req, res) => {
  db.query(
    `SELECT * FROM resources WHERE resources.category = $1 ORDER BY id ASC;`,
    [req.params.category]
  )
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500, "Could Not Complete Request");
    });
});

module.exports = router;
