<<<<<<< HEAD
const express = require ('express');
const router = express.Router();

const controller = require ('./controller')

// /v1/cadex 
router.get("/cadex", controller.getCadex);
=======
const express = require("express");
const router = express.Router();

const controller = require("./controller");

// /v1/cadex
router.get("/cadex",controller.getCadex);
>>>>>>> 8e399879b324588460aca428b2be0a192bc6bdb0

module.exports = router;