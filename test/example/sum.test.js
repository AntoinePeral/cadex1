require("chai").should();

const sum = require("./sum");

describe('SUM function', function () {
    it('should result 1 + 2 to equal 3', () => {
        sum(1, 2).should.equal(3);
    });

    it('should result 2 + 2 to equal 4', () => {
        sum(2, 2).should.equal(4);
    });
});