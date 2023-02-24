require("chai").should();

const cadexService = require("../app/service/cadex");
const data = require("../data/parts.json");

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
});