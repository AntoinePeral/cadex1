<<<<<<< HEAD
// Le service cadex va être utilisé pour effecuter tout le travail autour des cadex
const data = require ('../../data/parts.json')

const cadexService ={
  generate() {
    return{
      name: cadexService.getRandomName()
    }
  },
  getRandomName (){
    // Je récupère un index aléatoire dans mon tableau de nom (data.names)
    const randomIndex = getRandomIndex(0,data.names.length)
    console.log('randomIndex', randomIndex);

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
  }

}

module.exports = cadexService

// function getRandomIndex(max){
//   return getRandomIndex(0,max);
// }

function getRandomIndex(min, max){
  return Math.floor(Math.random() * (max-min)) + min;
};
=======
// Le service Cadex va être utilisé pour effectuer tout le travail autour des Cadex

const data = require("../../data/parts.json");

const cadexService  = {
    generate(){
        return {
            name:cadexService.getRandomName()
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
    }
};

module.exports = cadexService;

// function getRandomIndex(max){
//     return getRandomIndex(0,max);
// }

function getRandomIndex(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
>>>>>>> 8e399879b324588460aca428b2be0a192bc6bdb0
