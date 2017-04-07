var assert = require('assert')
var Record = require('../record')



describe('record', function(){
var record1

beforeEach(function(){
  record1 = new Record("Pink Floyd", "Dark Side of the Moon", "rock", 1000)
})

it('record has artist', function(){
assert.strictEqual("Pink Floyd" , record1.artist)
})

it('can get record details', function(){
  assert.strictEqual("Dark Side of the Moon by Pink Floyd\nMusic genre: rock\nPrice: 1000\n", record1.details())
})










})