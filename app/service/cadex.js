// Le service Cadex va être utilisé pour effectuer tout le travail autour des Cadex

const data = require("../../data/parts.json");
/*
{
    names:["..."]
    ...
}

*/


const cadexService  = {
    generate(){
        return {
            name:cadexService.getRandom("names"),
            adjective:cadexService.getRandom("adjectives"),
            verb:cadexService.getRandom("verbs"),
            complement:cadexService.getRandom("complements"),
            toString(){
                return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
            }
        };
    },
    getRandom(category){
        // Je récupère un index aléatoire dans mon tableau de nom (data.names)
        const randomIndex = getRandomIndex(0,data[category].length);
        // console.log("randomIndex",randomIndex);
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

        // je retourne un élément de la catégorie suivant l'index aléatoire
        return data[category][randomIndex];
    },
    add(form){
        for(const key in data){
            // est ce que key est une clef de form ?
            if(form[key.slice(0,-1)]){
                // si oui j'ajoute au dictionnaire
                data[key].push(form[key.slice(0,-1)]);
            }
        }
    }
};

module.exports = cadexService;

// function getRandomIndex(max){
//     return getRandomIndex(0,max);
// }

function getRandomIndex(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
