const express = require("express");
const router = express.Router();

const validationModule=require("./service/validation/validate");
const controller = require("./controller");


/**
 * @swagger
 * components:
 *   schemas:
 *     Cadex:
 *       type: string
 *       tags : [Cadex]
 *       properties:
 *         cadex:
 *           type: string
 *           description: Cadex
 *       example:
 *         "un cheval bien cuit consulte un seau en plastique"
 *     Form:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           description: name
 *         adjective: 
 *           type: string
 *           description: adjective
 *         verb: 
 *           type: string
 *           description: verb
 *         complement: 
 *           type: string
 *           description: complement
 *       example:
 *         {name: un cheval, adjective: bien cuit, verb: consulte, complement: un seau en plastique}
 */


 /**
    * @swagger
    * /v1/cadex:
    *   get: 
    *     summary: récupération d'un Cadex
    *     description: récupération d'un Cadex
    *     tags : [Cadex]
    *     parameters:
    *     - name: name
    *       description: nom
    *       in: query
    *     - name: adjective
    *       description: adjectif
    *       in: query
    *     - name: verb
    *       description: verbe
    *       in: query
    *     - name: complement
    *       description: complément
    *       in: query
    *     responses:
    *       200:
    *         description: Une phrase Cadex
    */
router.get("/cadex", validationModule.validate("query") ,controller.getCadex);


/**
 * @swagger
 * /v1/cadex:
 *   post:
 *     summary: Ajout d'un Cadex
 *     tags : [Cadex]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Form'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               items:
 *                 $ref: '#/components/schemas/Cadex'
 *             example:
 *               "un cheval bien cuit consulte un seau en plastique"
 */
router.post("/cadex", validationModule.validate("body"),controller.addCadex);


module.exports = router;