require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.static('public'));

// j'autorise la réception du type JSON dans req.body
app.use(express.json());

const router = require("./app/router");
app.use("/v1",router);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});