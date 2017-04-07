var assert = require('assert')
var Record = require('../record')
var RecordStore = require('../record_store')


describe('record', function(){
  var record1
  var store 
  beforeEach(function(){
    record1 = new Record("Pink Floyd", "Dark Side of the Moon", "rock", 1000)
    store = new RecordStore("Really Good Records", "San Francisco")
  })

it('record has artist', function(){
assert.strictEqual("Pink Floyd" , record1.artist)
store.addRecord(record1)
assert.strictEqual(1, store.inventory.length)
})












})