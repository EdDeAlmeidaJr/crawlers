const RegisteredCrawler = require('./RegisteredCrawlers');

const registeredCrawler = new RegisteredCrawler();

describe('RegisteredCrawler', () => {

    describe('properties', () => {

        test('crawlersString', () => {
            expect(registeredCrawler.crawlerString).not.toBe('undefined');
        });

    });

});