const express = require("express");
const cors = require("cors");

const app = express();

const renderRoute = require("./routes/render");

app.use(cors());
app.use(express.static("public"));

app.use("/render", renderRoute);

app.listen(4000);
