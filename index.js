const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nothing to change in the World!");
});

const users = [
  { id: 0, name: "John", email: "1murgirbaccha@kokkoroko.dim" },
  { id: 1, name: "JohnSin", email: "2murgirbaccha@kokkoroko.dim" },
  { id: 2, name: "Joe", email: "3murgirbaccha@kokkoroko.dim" },
  { id: 3, name: "Jack", email: "4murgirbaccha@kokkoroko.dim" },
  { id: 4, name: "Jayden", email: "5murgirbaccha@kokkoroko.dim" },
  { id: 5, name: "Kiram", email: "6murgirbaccha@kokkoroko.dim" },
];

//app-MeThod

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting my post", req.body);
  res.json(newUser);
});

//dynamic-api

app.get("/users", (req, res) => {
  const search = req.query.search;
  //use Qurery Params to get the search
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("here is your mango");
});

app.listen(port, () => console.log("listening to ", port));
