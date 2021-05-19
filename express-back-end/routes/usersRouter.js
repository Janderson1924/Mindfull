const express = require("express");
const router = express.Router();
const db = require("../lib/db");

// GET route to show logged in user profile and posts (Completed)
router.get("/profile/:userID", (req, res) => {
  return db
    .query(
      `SELECT * FROM users JOIN posts ON users.id = user_id WHERE users.id = $1;`,
      [req.params.userID]
    )
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500, "Could Not Complete Request");
    });
});

// POST route to submit login information to the database (redirect to homepage)
router.post("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = $1 AND password = $2;",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.rows.length > 0) {
        res.send(result.rows[0]);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    }
  );
});

// POST route to submit registration information to the database (redirect to homepage)
router.post("/register", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  db.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log("Unsuccessful Registration");
      } else {
        console.log("Successful Registration");
      }
    }
  );
});

module.exports = router;
