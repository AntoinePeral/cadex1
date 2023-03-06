const APIError = require("../error/APIError");
const { cadexSchema } = require("./schema");
const debug = require("debug")("module:validation"); // je déclare l'utilisation d'un espace de nom (namespace)

const validationModule = {

    /**
     * Valide les query string de ma requête
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    validateQuery(req, res, next) {
        const { error } = cadexSchema.validate(req.query);
        if (error) {
            debug(error);
            res.status(500).json({error:"Erreur interne"});
        }
        else {
            // s'il n'y a pas d'erreur je passe à la suite
            next();
        }
    },
    /**
     * Valide le body de ma requête
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    validateBody(req, res, next) {
        const { error } = cadexSchema.validate(req.body);

        if (error) {
            debug(error);
            res.status(500).json({error:"Erreur interne"});
        }
        else {
            // s'il n'y a pas d'erreur je passe à la suite
            next();
        }
    },
    // Exemple d'appel d'un middleware avec un paramètre
    validate(param){
        // console.log(param);
        return (req,_,next) =>{
            const { error } = cadexSchema.validate(req[param]);

            if (error) {
                next(new APIError(error.message,400));
            }
            else {
                // s'il n'y a pas d'erreur je passe à la suite
                next();
            }
        };
    }

};

module.exports = validationModule;