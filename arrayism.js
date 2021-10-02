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
const count = require('./src/count.js');
const type = require('./src/type.js');
const replace = require('./src/replace.js');
const filter = require('./src/filter.js');
const getArrayInfo = require('./src/getArrayInfo.js');
const flatten = require('./src/flat.js');
const random = require('./src/random.js');
const changeCase = require('./src/changeCase.js');
const walk = require('./src/walk.js');
const clear = require('./src/clear.js');
const join = require('./src/join.js');
const distance = require('./src/distance.js');

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
        this.average = math.average;
        this.min = math.min;
        this.max = math.max;
        this.nth = nth;
        this.getPiece = getPiece;
        this.shuffle = shuffle;
        this.asort = sort.asort;
        this.dsort = sort.dsort;
        this.insertBefore = insert.insertBefore;
        this.insertAfter = insert.insertAfter;
        this.count = count;
        this.type = type;
        this.replace = replace;
        this.filter = filter;
        this.getArrayInfo = getArrayInfo;
        this.flatten = flatten;
        this.random = random;
        this.changeCase = changeCase;
        this.walk = walk;
        this.clear = clear;
        this.join = join.join;
        this.joinDiff = join.joinDiff;
        this.distance = distance;
    }
}

module.exports = Arrayism;