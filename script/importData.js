require("dotenv").config();

console.log(process.env.PGUSER);
const { Client } = require("pg");
const client = new Client();
const data = require("../data/parts.json");

client.connect();

// Fonction qui permet d'importer des données dans une table
async function importData(value, tableName) {
    const sqlQuery = `INSERT INTO ${tableName.slice(0, -1)} (label) VALUES ($1);`;
    const values = [value];

    // console.log(sqlQuery);
    // console.log(values);
    try {
        await client.query(sqlQuery, values);
    }
    catch (err) {
        console.error(err);
    }
}

let counter = 0;
for (const tableName in data) { // je parcours les clefs de mon JSON
    // console.log(tableName);
    for (const value of data[tableName]) { // je parcours les valeurs du tableau à la clef "tableName"
        importData(value, tableName);
        counter++;
    }
}
console.log(counter);

