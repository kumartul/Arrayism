const chunk = require('./src/chunk.js');
const clone = require('./src/clone.js');
const get = require('./src/get.js');
const clean = require('./src/clean.js');
const pollute = require('./src/pollute.js');
const unique = require('./src/unique.js');
const remove = require('./src/remove.js');
const math = require('./src/math.js');

class Arrayism {
    constructor() {
        this.chunk = chunk;
        this.clone = clone;
        this.get = get;
        this.clean = clean;
        this.pollute = pollute;
        this.unique = unique;
        this.remove = remove;
        this.sum = math.sum;
        this.difference = math.difference;
        this.product = math.product;
        this.quotient = math.quotient;
    }
}

module.exports = Arrayism;