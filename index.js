require("dotenv").config();
const express = require('express');
const app = express();


const router = require("./app/router");

app.use(router);
app.use("/v1",router);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});