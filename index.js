require("dotenv").config();
const express = require('express');

const debug = require("debug")("express");

const app = express();

//#region Swagger

/*********************************************/
/********* swagger-jsdoc *********/
/*********************************************/

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cadex API',
      version: '1.0.0',
    },
  },
  apis: ['./app/router.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//#endregion Swagger


/*********************************************/
/************** Config Express ***************/
/*********************************************/

app.use(express.static('public'));

// j'autorise la réception du type JSON dans req.body
app.use(express.json());

const router = require("./app/router");
app.use("/v1",router);

// gestion d'erreur
const errorModule = require("./app/service/error/errorHandling");
// gestion de l'erreur 404
app.use(errorModule._404);
// gestion des erreurs globales
app.use(errorModule.manage);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    debug(`Example app listening on port ${port}`);
});