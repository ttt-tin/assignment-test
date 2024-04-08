const express = require("express");
const app = express();
const pageRoutes = require("./routes/pageRoute");
const bodyParser = require("body-parser");
const cors = require('cors')

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(cors({ origin: true, credentials: true }))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(pageRoutes);

app.listen(8000, (err) => {
  if (err) throw err;
  console.log("listening on port 8000");
});
