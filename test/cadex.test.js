require("chai").should();

const cadexService = require("../app/service/cadex");
const data = require("../data/parts.json");

<<<<<<< HEAD
describe('Cadex Service', function () {
  const cadex = cadexService.generate()

  it('should return an object', () => {
      cadex.should.be.an('object');
  });

  it('should have a key name', () => {
    cadex.should.have.property('name');
  });

  describe('Key name', function () {
    it('should be a string', () => {
      cadex.name.should.be.a('string');
    });

    it('should be a random name', () => {
      data.names.should.include(cadex.name)
    });
    

  })

  // it('should return a cadex', () => {
      
  // });
=======
describe('Cadex service', function () {
    const cadex = cadexService.generate();

    it('should return a object', () => {
        cadex.should.be.an("object");
    });

    it('should have a key name', () => {
        cadex.should.have.property("name");
    });

    describe('Key name', function () {
        it('should be a string', () => {
            cadex.name.should.be.a('string');
        });

        it('should be a random name', () => {
            data.names.should.include(cadex.name);
        });
    });

    // it('should return a cadex', () => {
       
    // });


>>>>>>> 8e399879b324588460aca428b2be0a192bc6bdb0
});