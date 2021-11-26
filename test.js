require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/allRoutes.js");
const cors = require("cors");
const serverAccess = require("./data.json");
const app = express();

//Use Database start
const TEST_DB_LINK = `mongodb+srv://MyDataBase1:${process.env.DB_PASSWORD}@cluster0.imeda.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//Import Router

//routes.js
app.use(
  express.urlencoded({
    extended: true,
  })
);

//My middle war start
function tinyLogger(req, res, next) {
  console.log("----------------------------");
  console.log(`${req.method} - ${req.url}`);
  console.log("body - ", req.body);
  console.log("query - ", req.query);
  console.log("haders - ", req.headers);

  console.log("----------------------------");
  next();
}

//Use middlewar
const allMiddleWar = [
  express.static("public"),
  tinyLogger,
  express.json(),
  cors({
    origin: serverAccess.origin,
    credentials: true,
  }),
];
app.use(allMiddleWar);
//My middle war end

app.set("view engine", "ejs");

//Use Routes
routes(app);

app.get("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

const port = process.env.PORT || 8081;

mongoose
  .connect(TEST_DB_LINK, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((e) => {
    console.log("Database Connected.");
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Server is running at ${port}`);
      }
    });
  })
  .catch((e) => {
    console.log("Cannot Connect with Database");
    console.log(e);
  });
