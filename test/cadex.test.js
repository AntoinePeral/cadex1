require("chai").should();

const cadexService = require("../app/service/cadex");
const data = require("../data/parts.json");

describe('Cadex service', function () {
    const cadex = cadexService.generate();
    console.log(cadex);

    it('should return a object', () => {
        cadex.should.be.an("object");
    });

    it('should have a key name', () => {
        cadex.should.have.property("name");
    });

    it('should have a key adjectives', () => {
        cadex.should.have.property("adjectives");
    });

    it('should have a key verbs', () => {
      cadex.should.have.property("verbs");
    });
    
    it('should have a key complements', () => {
      cadex.should.have.property("complements");
    });

    describe('Key name', function () {
        it('should be a string', () => {
            cadex.name.should.be.a('string');
        });

        it('should be a random name', () => {
            data.names.should.include(cadex.name);
        });

      });

      describe('Key Adjectives', function () {
        it('should be a string', () => {
            cadex.adjectives.should.be.a('string');
        });

        it('should be a random adjectives', () => {
            data.adjectives.should.include(cadex.adjectives);
        });
      });

      describe('Key verbs', function(){
        it('should be a string', ()=> {
          cadex.verbs.should.be.a('string');
        });

        it('should be a random verbs', ()=>{
          data.verbs.should.include(cadex.verbs);
        });
      })

      describe('Key complements', function(){
        it('should be a string', ()=> {
          cadex.complements.should.be.a('string');
        });

        it('should be a random complements', ()=>{
          data.complements.should.include(cadex.complements);
        });
      })

    // it('should return a cadex', () => {
       
    // });


});