// const cadexService = require("./service/cadex");
const dataMapper = require("./datamapper");
const APIError = require("./service/error/APIError");

const debug = require("debug")("controller");

const cadexController = {
    /**
     * Récupération d'un cadex
     * @param {object} req requête Express
     * @param {object} res réponse Express
     * @return {string} retourne une phrase Cadex
     */
    async getCadex(req,res,next){
        
        let cadex = await dataMapper.generate();

        // Je teste si cadex est vide pour renvoyer une erreur
        if(cadex){
            // console.log(cadex);
            // console.log(req.query);
            cadex = { ...cadex, ...req.query};
            debug("CONTROLLER");
            debug(cadex);

            res.json(cadex.toString());
        }
        else{
            next(new APIError("Erreur lors de la récupération du Cadex",500));
        }
    },
    /**
     * Ajout des données du formulaire en BDD
     * @param {*} req requête Express
     * @param {*} res réponse Express
     * @returns {string} retourne une phrase Cadex
     */
    async addCadex(req,res){
        
        // 1. on ajoute au dicutonnaire les données du formulaire
        await dataMapper.add(req.body);

        // 2. génération d'un cadex avec la prise en compte des mots du formulaire
        let cadex = await dataMapper.generate();
        cadex = { ...cadex, ...req.body};

        res.json(cadex.toString());
    }
};

module.exports = cadexController;