const fs = require('fs');

class RegisteredCrawlers {

    constructor() {
        this.crawlersStream = fs.readFileSync(process.cwd() + '/data/crawlers.json');
        this.crawlersJSON = JSON.parse(this.crawlersStream);
        this.myCrawlers = Object.keys(this.crawlersJSON);
    }

    isRegistered(crawlerName) {
        console.log(this.myCrawlers);
        return this.myCrawlers.includes(crawlerName);
    }

    crawlerSpec(crawlerName) {
        return this.crawlersJSON[crawlerName];
    }

};

module.exports = RegisteredCrawlers;