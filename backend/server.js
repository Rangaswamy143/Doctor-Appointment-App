const express = require("express");
const app = express();
require("dotenv").config();

const dbConfig = require("./config/dbConfig.js");
const port = process.env.PORT || 5000;
// console.log(process.env.MONGO_URL);

app.listen(port, () => console.log(`node server started at port ${port}`));
