const express = require("express");
const router = express.Router();

const controller = require("./controller");

// /v1/cadex
router.get("/cadex",controller.getCadex);

module.exports = router;