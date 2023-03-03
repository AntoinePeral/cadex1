const Joi = require('joi');

// const stringFormat = /^[a-zÀ-ÿ ]+$/i;

// le même format mais en utilisant le format Unicode
const stringFormat = /^[a-zA-Z\u00C0-\u00FF ]*$/u;

const cadexSchema = Joi.object({
    name: Joi.string().pattern(stringFormat),
    adjective: Joi.string().pattern(stringFormat),
    verb: Joi.string().pattern(stringFormat),
    complement: Joi.string().pattern(stringFormat)
});

module.exports = {
    cadexSchema
};