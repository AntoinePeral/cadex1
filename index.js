require("dotenv").config();
const express = require('express');

const app = express();

//#region Swagger

/*********************************************/
/********* EXPRESS SWAGGER GENERATOR *********/
/*********************************************/

const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'Documentation de l\'API Cadex',
            title: 'Cadex API',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./app/*.js'] //Path to the API handle folder
};
expressSwagger(options);

//#endregion Swagger


/*********************************************/
/************** Config Express ***************/
/*********************************************/

app.use(express.static('public'));

// j'autorise la réception du type JSON dans req.body
app.use(express.json());

const router = require("./app/router");
app.use("/v1",router);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});