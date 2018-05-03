const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {

    beforeEach(() => {
        mortgage = new Mortgage(500000, 3.75, 30, 12);
        mortgage1 = new Mortgage(300000, 2.75, 15, 12)
        mortgage2 = new Mortgage(1000000, 4, 30, 12)
    });

    it('should have a Monthly Payment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });
    it('should calculate correct Monthly Payment', () => {
        expect(mortgage.monthlyPayment()).to.equal(2315.58);
    });
    it('should calculate correct Monthly Payment', () => {
        expect(mortgage1.monthlyPayment()).to.equal(2035.86);
    });
    it('should calculate correct Monthly Payment', () => {
        expect(mortgage2.monthlyPayment()).to.equal(4774.15);
    });

});
