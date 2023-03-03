<<<<<<< HEAD
const express = require ('express');
const router = express.Router();

const controller = require ('./controller')

// /v1/cadex 
router.get("/cadex", controller.getCadex);
=======
const express = require("express");
const router = express.Router();

const validationModule=require("./service/validation/validate");
const controller = require("./controller");

/**
 * @route GET /v1/cadex
 * @group Cadex - récupération d'un Cadex
 * @param {string} name.query - nom
 * @param {string} adjective.query - adjectif
 * @param {string} verb.query - verbe
 * @param {string} complement.query - complément
 * @returns {object} 200 - Une phrase Cadex
 * @returns {Error}  default - Unexpected error
 */
router.get("/cadex", validationModule.validate("query") ,controller.getCadex);

/**
 * @route POST /v1/cadex
 * @group Cadex - ajout de mots à notre dictionnaire
 * @param {Cadex.model} proposal.body.required - objet Cadex
 * @returns {object} 200 - Une phrase Cadex
 * @returns {Error}  default - Unexpected error
 */
router.post("/cadex", validationModule.validate("body"),controller.addCadex);




module.exports = router;