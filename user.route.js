const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Fetching all users</h1>");
});
router.get("/:id", (req, res) => {
  const query = req.params.id;
  res.send(`fetching user with ID:${query}`);
});
router.post("/", (req, res) => {
  res.send("<h1>adding new user</h1>");
});

module.exports = router;
