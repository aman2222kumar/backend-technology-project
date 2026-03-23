const express = require("express");

const router = express.Router();
const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];
router.get("/", (req, res) => {
  const data = `Courses: ${courses[0].name},${courses[1].name}`;

  res.send(data);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  data = courses.find((item, idx) => item.id === id);
  if (!data) {
    return res.status(404).send("Course not found");
  }
  const name = `course:${data.name}`;
  res.send(name);
});

module.exports = router;
