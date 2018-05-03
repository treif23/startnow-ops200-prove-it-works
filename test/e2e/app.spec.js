const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
    let httpServer = null;
    let pageObject = null;

    before((done) => {
        httpServer = app.listen(8888);
        done();
    });

    beforeEach(() => {
        pageObject = nightmare.goto(url);
    });

    after((done) => {
        httpServer.close();
        done();
    });

    // This is where your code is going to go
    it('should contain a <h1> element for the page title', () => pageObject.evaluate(() => document.querySelector('h1').innerText).then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
    })
    );
    it('should contain a <button>', () => {
        return pageObject
            .evaluate(() => document.querySelector('button[id=calculate]'))
            .then(input => expect(input).to.exist)
    });
    it('should contain a <input> element for the Interest Rate', () => {
        return pageObject
            .evaluate(() => document.querySelector('input[name=interestRate]'))
            .then(input => expect(input).to.exist)
    });
    it('should contain a <input> element for the Loan Term', () => {
        return pageObject
            .evaluate(() => document.querySelector('input[name=loanTerm]'))
            .then(input => expect(input).to.exist)
    });
})