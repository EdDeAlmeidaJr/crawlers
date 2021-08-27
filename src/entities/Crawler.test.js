const Crawler = require('./Crawler');

const crawler = new Crawler();

describe('Crawler', () => {

    describe('properties',() =>{

        test('name',() => {
            expect(crawler.test).not.toBe('undefined');
            expect(crawler.test).not.toBe(null);
        });

    });

});