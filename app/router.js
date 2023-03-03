const express = require("express");
const router = express.Router();

const validationModule=require("./service/validation/validate");
const controller = require("./controller");

// GET /v1/cadex
router.get("/cadex", validationModule.validate("query") ,controller.getCadex);

// POST /v1/cadex
router.post("/cadex", validationModule.validate("body"),controller.addCadex);




module.exports = router;