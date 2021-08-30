const fetch = require('node-fetch');

const RegisteredCrawlers = require('./RegisteredCrawlers');

const SingleRequestCrawler = require('./SingleRequestCrawler');

class Crawler {

    constructor(name) {
        this.name = name;
        this.regCrawlers = new RegisteredCrawlers();
        this.crawlerSpec = {};
        this.baseURL = null;
        this.method = null;
        this.pathToList = null;
        this.data = null;
        this.actualCrawler = null;
    }

    crawler_run() {
        if (this.method === 'single_request') {
            this.actualCrawler = new SingleRequestCrawler(this.name);
        }
        this.actualCrawler.process();
    }

    process() {
        try {
            if (!this.regCrawlers.isRegistered(this.name)) {
                throw Error('Not a registered crawler: ' + this.name);
            }
            this.crawlerSpec = this.regCrawlers.crawlerSpec(this.name);
            this.method = this.crawlerSpec.method;
            this.crawler_run();
        } catch (e) {
            console.log(e.message);
            process.exit(9); // Exiting - Invalid parameter

        }
    }

};

module.exports = Crawler;