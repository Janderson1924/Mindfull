const express = require("express");
const router = express.Router();
const db = require("../lib/db");

// GET route to show favourited resources for user on profile
router.get("/favourited", (req, res) => {
  db.query(`SELECT * FROM resources WHERE resources.favourited = true`).then(
    (data) => {
      res.json(data.rows);
    }
  );
});

// //POST route to change favourited/unfavourited
router.post("/toggle/:id", (req, res) => {
  db.query(
    `UPDATE resources SET favourited = NOT COALESCE( favourited, 'f' ) WHERE id = $1`,
    [req.params.id]
  ).then((data) => {
    res.json(data.rows);
  });
});

module.exports = router;
