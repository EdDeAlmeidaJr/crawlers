const fetch = require('node-fetch');

const RegisteredCrawlers = require('./RegisteredCrawlers');

class Crawler {

    constructor(name) {
        this.name = name;
        this.regCrawlers = new RegisteredCrawlers();
        this.crawlerSpec = {};
        this.baseURL = null;
        this.method = null;
        this.pathToList = null;
        this.data = null;
    }

    crawler_fetch_data() {
        fetch(this.baseURL)
            .then(res => res.json())
            .then(res => {
                this.data = res;
                this.pathToList.forEach(element => {
                    this.data = this.data[element];
                    console.log(this.data);
                });
                console.log(this.data);
            })
    }

    single_request_run() {
        this.crawler_fetch_data();
    }

    crawler_run() {
        if (this.method === 'single_request') {
            this.single_request_run();
        }
    }

    process() {
        try {

            if (!this.regCrawlers.isRegistered(this.name)) {
                throw Error('Not a registered crawler: ' + this.name);
            }

            this.crawlerSpec = this.regCrawlers.crawlerSpec(this.name);
            this.baseURL = this.crawlerSpec.baseURL;
            this.method = this.crawlerSpec.method;
            this.pathToList = this.crawlerSpec.pathToList.split('|');

            this.crawler_run();
        } catch (e) {
            console.log(e.message);
            process.exit(9); // Exiting - Invalid parameter

        }
    }

};

module.exports = Crawler;