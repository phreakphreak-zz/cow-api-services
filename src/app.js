const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const { httpRequest,error404,error500 } = require("./middlewares/index");

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(httpRequest);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", require("./routes/index"));

// error handler
app.use(error404);


module.exports = app;
