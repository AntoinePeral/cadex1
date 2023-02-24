<<<<<<< HEAD
const cadexService = require ('./service/cadex')

const cadexController = {
  getCadex (_, res){
    const cadex  = cadexService.generate();
    console.log(cadex);

    res.json(cadex)
  }
}

module.exports = cadexController
=======
const cadexService = require("./service/cadex");

const cadexController = {
    getCadex(_,res){
        const cadex = cadexService.generate();

        console.log(cadex);

        res.json(cadex);
    }
};

module.exports = cadexController;
>>>>>>> 8e399879b324588460aca428b2be0a192bc6bdb0
