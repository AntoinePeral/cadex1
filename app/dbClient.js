const {Client} = require("pg");

const client = new Client();
// console.log("client",client);
client.connect();


module.exports = client;