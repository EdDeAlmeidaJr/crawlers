const RegisteredCrawlers = require('./RegisteredCrawlers');

class Crawler {

    constructor(name) {
        this.name = name;
        this.regCrawlers = new RegisteredCrawlers();
        this.crawlerSpec = {};
        this.baseURL = null;
        this.method = null;
    }

    run_crawler() {
        console.log("Running the crawler...");
    }

    process() {
        try {
            
            if (!this.regCrawlers.isRegistered(this.name)) {
                throw Error('Not a registered crawler: ' + this.name);
            }

            this.crawlerSpec = this.regCrawlers.crawlerSpec(this.name);
            this.baseURL = this.crawlerSpec.baseURL;
            this.method = this.crawlerSpec.method;

            this.run_crawler(); 
        } catch (e) {
            console.log(e.message);
            process.exit(9); // Exiting - Invalid parameter

        }
    }

};

module.exports = Crawler;