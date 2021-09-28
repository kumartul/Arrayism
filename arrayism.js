const chunk = require('./src/chunk.js');
const clone = require('./src/clone.js');
const get = require('./src/get.js');
const clean = require('./src/clean.js');
const pollute = require('./src/pollute.js');
const unique = require('./src/unique.js');
const remove = require('./src/remove.js');
const math = require('./src/math.js');
const nth = require('./src/nth.js');
const getPiece = require('./src/getpiece.js');
const shuffle = require('./src/shuffle.js');
const sort = require('./src/sort.js');
const insert = require('./src/insert.js');

class Arrayism {
    constructor() {
        this.chunk = chunk;
        this.clone = clone;
        this.get = get;
        this.clean = clean;
        this.pollute = pollute;
        this.unique = unique;
        this.remove = remove.remove;
        this.removeMany = remove.removeMany;
        this.sum = math.sum;
        this.difference = math.difference;
        this.product = math.product;
        this.quotient = math.quotient;
        this.nth = nth;
        this.getPiece = getPiece;
        this.shuffle = shuffle;
        this.asort = sort.asort;
        this.dsort = sort.dsort;
        this.insertBefore = insert.insertBefore;
        this.insertAfter = insert.insertAfter;
    }
}

module.exports = Arrayism;