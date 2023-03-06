const client = require("./dbClient");
const errorModule = require("./service/error/errorHandling");
const debug = require("debug")("datamapper");
/**
 * Un Cadex est un objet composé d'un nom, d'un adjective, d'un verbe et d'un complément
 * @typedef {Object} Cadex
 * @property {string} name - nom
 * @property {string} adjective - adjectif
 * @property {string} verb - verbe
 * @property {string} complement - complément
 */

const dataMapper = {
    /**
     * Permet de générer un Cadex
     * @returns {Cadex} Cadex
     */
    async generate(){
        let response;

        const sqlQuery = `
            SELECT name.label as "name",adjective.label as "adjective",verb.label as "verb",complement.label as "complement"
            FROM names,adjective,verb,complement
            ORDER BY random()
            LIMIT 1;`;

        try{
            // Quand j'appelle un système externe à Node (ici la BDD)
            // Je ne maîtrise pas la réponse (quand ? quoi ?)
            response = await client.query(sqlQuery);
        }
        catch(err){
            errorModule.log(err);
        }

        if(response){
            const cadex = response.rows[0];
            debug("DATAMAPPER");
            debug(cadex);

            // return {
            //     name:cadex.name,
            //     adjective:cadex.adjective,
            //     verb:cadex.verb,
            //     complement:cadex.complement,
            //     toString(){
            //         return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
            //     }
            // }

            return {
                ...cadex,
                toString(){
                    return `${this.name} ${this.adjective} ${this.verb} ${this.complement}`;
                }
            };
        }

    },
    /**
     * Ajoute un Cadex en BDD
     * @param {Cadex} form  - données entrantes du formulaire
     */
    add(form){
        // for(const key in data){
        //     // est ce que key est une clef de form ?
        //     if(form[key.slice(0,-1)]){
        //         // si oui j'ajoute au dictionnaire
        //         data[key].push(form[key.slice(0,-1)]);
        //     }
        // }
    }
};

module.exports = dataMapper;