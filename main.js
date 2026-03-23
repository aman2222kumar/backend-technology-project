const express = require("express");

const app = express();

app.use(express.json());

const courses = require("./course.route");
const students = require("./student.route");
app.use("/courses", courses);
app.use("/students", students);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Student & Course Portal API!</h1>");
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(4000, () => {
  console.log("listening port at 4000");
});
