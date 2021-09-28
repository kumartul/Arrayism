const chunk = require('./src/chunk.js');
const clone = require('./src/clone.js');
const get = require('./src/get.js');
const clean = require('./src/clean.js');
const pollute = require('./src/pollute.js');

class Arrayism {
    constructor() {
        this.chunk = chunk;
        this.clone = clone;
        this.get = get;
        this.clean = clean;
        this.pollute = pollute;
    }
}

module.exports = Arrayism;