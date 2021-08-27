const RegisteredCrawlers = require('./RegisteredCrawlers');

class Crawler {

    constructor(name) {
        this.name = name;
        this.regCrawlers = new RegisteredCrawlers();
    }

    process() {
        try {
            if (!this.regCrawlers.isRegistered(this.name)) {
                throw Error('Not a registered crawler: ' + this.name);
            }
        } catch (e) {
            console.log(e.message);
            process.exit();
        }
    }

};

module.exports = Crawler;