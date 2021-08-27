const fs = require('fs');

class RegisteredCrawlers {

    constructor() {
        this.crawlersStream = fs.readFileSync(process.cwd() + '/data/crawlers.json');
        this.crawlersJSON = JSON.parse(this.crawlersStream);
        this.myCrawlers = Object.keys(this.crawlersJSON);
    }

    isRegistered(crawlerName) {
        return this.myCrawlers.contains(crawlerName);
    }

};

module.exports = RegisteredCrawlers;