import express from "express";
import path, { resolve } from "path";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const users = [];
app.use(express.static(path.join(path.resolve(), "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "hemkishore" });
});
app.post("/submit", (req, res) => {
  users.push(req.body);
  res.redirect("/");
});
app.get("/users", (req, res) => {
  res.json(users);
  console.log(users);
});
app.listen(port, () => {
  console.log("Server is running...");
});
