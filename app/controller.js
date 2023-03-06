const cadexService = require("./service/cadex");

const cadexController = {
    getCadex(req,res){
        
        let cadex = cadexService.generate();

        // console.log(cadex);
        // console.log(req.query);
        cadex = { ...cadex, ...req.query};
        // console.log(cadex);

        res.json(cadex.toString());
    },
    addCadex(req,res){
        
        // 1. on ajoute au dicutonnaire les données du formulaire
        cadexService.add(req.body);

        // 2. génération d'un cadex avec la prise en compte des mots du formulaire
        let cadex = cadexService.generate();
        cadex = { ...cadex, ...req.body};

        res.json(cadex.toString());
    }
};

module.exports = cadexController;
