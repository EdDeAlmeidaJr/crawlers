const fs = require('fs');

class Config {

    constructor() {
        this.configStream = fs.readFileSync(process.cwd() + '/data/config.json');
        this.configJSON = JSON.parse(this.configStream);
        this.movieRecord = this.configJSON.movieRecord;
        this.songRecord = this.configJSON.songRecord;
    }

    getMovieRecord() {
        return this.movieRecord;
    }

    getSongRecord() {
        return this.songRecord;
    }
    

}

]module.exports = Config;