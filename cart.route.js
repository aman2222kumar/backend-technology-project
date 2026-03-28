const express = require("express");
const router = express.Router();

router.get("/:userId", (req, res) => {
  const query = req.params.userId;
  res.send(`fetching user with User ID:${query}`);
});
router.post("/:userId", (req, res) => {
  const query = req.params.userId;
  res.send(`adding product to cart for user with User ID:${query}`);
});

module.exports = router;
