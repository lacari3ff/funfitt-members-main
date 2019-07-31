const express = require("express");

const app = express();

const renderRoute = require("./routes/render");

app.use("/render", renderRoute);

app.listen(4000);
