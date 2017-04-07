var assert = require('assert')
var Record = require('../record')



describe('record', function(){

it('record has artist', function(){
var record1 = new Record("Pink Floyd", "Dark Side of the Moon", "rock", 1000)
assert.strictEqual("Pink Floyd" , record1.artist)
})










})