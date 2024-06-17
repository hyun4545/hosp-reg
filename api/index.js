const express = require("express");
const pool = require("./db");

const app = express();

app.get("/users", async (req, res, next) => {
  try {
    const data = await pool.query("SELECT * FROM users");
    if (data.rows.length > 0) {
    } else {
    }
    res.send(data.rows);
  } catch {
    res.status(500).send("Error Occurs");
  }
});

app.listen(3005, (req, res) => {
  console.log("Running at 3001");
});
