const Crawler = require('./src/entities/Crawler');

const name = process.argv[2];

const crawler = new Crawler(name);

crawler.process();