const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Fetching all products</h1>");
});
router.get("/:id", (req, res) => {
  const query = req.params.id;
  res.send(`fetching product with ID:${query}`);
});
router.post("/", (req, res) => {
  res.send("<h1>adding new product</h1>");
});

module.exports = router;
