class SingleRequestCrawler {

    constructor(name) {
        this.name = name;
    }

    process() {
        console.log("Crawler:", this.name);
    }

}

module.exports = SingleRequestCrawler;