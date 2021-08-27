const RegisteredCrawlers = require('./RegisteredCrawlers');

class Crawler {

    constructor(name) {
        this.name = name;
        this.regCrawlers = new RegisteredCrawlers();
    }

    process() {
        if (!this.regCrawlers.isRegistered(this.name)) {
            throw Error('Not a registered crawler: ' + this.name);
        }
    }

};

module.exports = Crawler;