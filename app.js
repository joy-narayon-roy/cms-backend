require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/allRoutes.js");
const cors = require("cors");


const app = express();

//Use Database start
const DB_LINK = `mongodb+srv://MyDataBase1:${process.env.DB_PASSWORD}@cluster0.yiali.mongodb.net/rechargeData21?retryWrites=true&w=majority`;

//Import Router

//routes.js
app.use(
  express.urlencoded({
    extended: true,
  })
);

//My middle war start

//Use middlewar
const allMiddleWar = [
  express.static("public"),
  express.json(),
  cors({
    origin: process.env.ACCESS_DOMAIN.split(' '),
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
  .connect(DB_LINK, {
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
