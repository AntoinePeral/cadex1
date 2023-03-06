const APIError = require("./APIError");

const debug = require("debug")("error");


const errorModule = {
    /**
     * Méthode pour gérer le log d'erreurs et la réponse au client
     * @param {*} err 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    manage(err, req, res, next) {
        // 1. J'enregistre l'erreur avec les infos nécessaires pour pouvoir analyser le soucis (log d'erreur)
        errorModule.log(err);

        // 2. J'informe le client/utilisateur
        switch (err.code) {
            case 400:
                res.status(400).json("Bad request");
                break;
            case 404:
                res.status(404).json("Not found");
                break;
            default:
                res.status(err.code).json("Internal server error");
                break;
        }

    },
    /**
     * Gère l'erreur 404
     * @param {*} _ 
     * @param {*} __ 
     * @param {*} next middleware pour indiquer à Express qu'il y a une erreur
     */
    _404(_,__,next) {
        next(new APIError('Not found', 404));
    },
    log(err){
        debug(err); // <= debug en DEV
        // je vais générer des fichiers textes qui vont enregistrer les erreurs // <= log pour la production

    }
};

module.exports = errorModule;