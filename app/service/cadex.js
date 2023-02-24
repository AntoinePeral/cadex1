// Le service Cadex va être utilisé pour effectuer tout le travail autour des Cadex

const data = require("../../data/parts.json");

const cadexService  = {
    generate(){
        return {
            name:cadexService.getRandomName(),
            adjectives: cadexService.getRandomAdjectives(),
            verbs: cadexService.getRandomVerbs(),
            complements: cadexService.getRandomComplements()
        };
    },
    getRandomName(){
        // Je récupère un index aléatoire dans mon tableau de nom (data.names)
        const randomIndex = getRandomIndex(0,data.names.length);
        console.log("randomIndex",randomIndex);
        /*
            Pour une plage de 0 à 5

            arrondi du Math.round
            entre 0 et 0,4999... => 0
            entre 0,5 et 1,4999... => 1

            arrondi du Math.floor
            entre 0 et 0,99999... => 0
            entre 1 et 1,99999... => 1
            ...
            entre 4 et 4,9999... => 4

            Notre tableau de "names" contient 9 éléments, on veut un index entre 0 et 8
            Math.floor(Math.random() * 9)

        */

        return data.names[randomIndex];
    },
    getRandomAdjectives (){
      const randomIndex = getRandomIndex(0, data.adjectives.length)
      console.log("randomIndex", randomIndex);
      return data.adjectives[randomIndex]
    },
    getRandomVerbs (){
      const randomIndex = getRandomIndex(0, data.verbs.length)
      console.log("randomIndex", randomIndex);
      return data.verbs[randomIndex]
    },
    getRandomComplements (){
      const randomIndex = getRandomIndex(0, data.complements.length)
      console.log("randomIndex", randomIndex);
      return data.complements[randomIndex]
    },


};

module.exports = cadexService;

// function getRandomIndex(max){
//     return getRandomIndex(0,max);
// }

function getRandomIndex(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
