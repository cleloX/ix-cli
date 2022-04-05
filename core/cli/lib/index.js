'use strict';

const pkm = require('../package.json')
const log = require('@ix-cli/log')

function core(argv) {
    // TODO
    console.log('there is core!!', argv);
    log.success('version: ', pkm.version);
}

module.exports = core;