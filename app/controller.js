const cadexService = require("./service/cadex");

const cadexController = {
    getCadex(_,res){
        const cadex = cadexService.generate();

        console.log(cadex);

        res.json(cadex);
    }
};

module.exports = cadexController;