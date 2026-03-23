const students = [
  { id: 1, name: "Alice" },

  { id: 2, name: "Bob" },

  { id: 3, name: "Charlie" },
];

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const data = `students:${students[0].name},${students[1].name}`;

  res.send(data);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  data = students.find((item, idx) => item.id === id);
  if (!data) {
    return res.status(404).send("Course not found");
  }
  const name = `student:${data.name}`;
  res.send(name);
});

module.exports = router;
