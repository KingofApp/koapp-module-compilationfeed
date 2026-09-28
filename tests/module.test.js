'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'config.json'), 'utf8'));
const es = JSON.parse(fs.readFileSync(path.join(root, 'locale/es_ES.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(root, 'locale/en_US.json'), 'utf8'));

assert.strictEqual(config.identifier, 'compilationfeed');
assert.strictEqual(config.view, 'modules/compilationfeed/index.html');
assert(config.files.includes('modules/compilationfeed/controller.js'));
assert(config.files.includes('modules/compilationfeed/locale/es_ES.json'));
assert(config.files.includes('modules/compilationfeed/locale/en_US.json'));
assert.deepStrictEqual(Object.keys(es).sort(), Object.keys(en).sort());
assert.deepStrictEqual(Object.keys(es.status).sort(), Object.keys(en.status).sort());
assert.deepStrictEqual(Object.keys(es.error).sort(), Object.keys(en.error).sort());
assert(config.description['es-ES'] && config.description['en-US']);
assert(config.showOn.market && config.showOn.dragDrop);

console.log('Module metadata and locale bundles are valid');
