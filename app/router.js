const express = require("express");
const router = express.Router();

const controller = require("./controller");

// GET /v1/cadex
router.get("/cadex",controller.getCadex);

// POST /v1/cadex
router.post("/cadex",controller.addCadex);

module.exports = router;