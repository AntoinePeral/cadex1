require("chai").should();

let request = require('supertest');
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

    /********************/
    // NAME
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

    /********************/
    // ADJECTIVE
    it('should have a key adjective', () => {
        cadex.should.have.property("adjective");
    });

    describe('Key adjective', function () {
        it('should be a string', () => {
            cadex.adjective.should.be.a('string');
        });

        it('should be a random adjective', () => {
            data.adjectives.should.include(cadex.adjective);
        });
    });

    /********************/
    // VERB
    it('should have a key verb', () => {
        cadex.should.have.property("verb");
    });

    describe('Key verb', function () {
        it('should be a string', () => {
            cadex.verb.should.be.a('string');
        });

        it('should be a random verb', () => {
            data.verbs.should.include(cadex.verb);
        });
    });


    /********************/
    // COMPLEMENT
    it('should have a key complement', () => {
        cadex.should.have.property("complement");
    });

    describe('Key complement', function () {
        it('should be a string', () => {
            cadex.complement.should.be.a('string');
        });

        it('should be a random complement', () => {
            data.complements.should.include(cadex.complement);
        });
    });



    it('should return a cadex', (done) => {
        request = request('http://localhost:3000');

        request
        .get('/v1/cadex')
        .expect(200)
        .end((err, res) => {
            if (err) {
                return done(err);
            }

            // console.log("########");
            const result = JSON.parse(res.text);   // je parse le retour qui est un string (je le transforme en objet)
            // console.log(result);
            result.should.be.an("string");
            return done();
        });

        request
        .post('/v1/cadex')
        .send({name: 'john'})
        .expect(200)
        .end((err, res) => {
            if (err) {
                return done(err);
            }

            // console.log("########");
            const phrase = JSON.parse(res.text);   // je parse le retour qui est un string (je le transforme en objet)

            result.should.be.an("string");
            return done();
        });
    });


>>>>>>> 8e399879b324588460aca428b2be0a192bc6bdb0
});