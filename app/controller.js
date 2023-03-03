// const cadexService = require("./service/cadex");
const dataMapper = require("./datamapper");

const cadexController = {
    async getCadex(req,res){
        
        let cadex = await dataMapper.generate();

        // console.log(cadex);
        // console.log(req.query);
        cadex = { ...cadex, ...req.query};
        console.log("CONTROLLER");
        console.log(cadex);

        res.json(cadex.toString());
    },
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