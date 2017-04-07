var assert = require('assert')
var Record = require('../record')
var RecordStore = require('../record_store')


describe('record', function(){

it('record has artist', function(){
var record1 = new Record("Pink Floyd", "Dark Side of the Moon", "rock", 1000)
assert.strictEqual("Pink Floyd" , record1.artist)
var store = new RecordStore("Really Good Records", "San Francisco")
store.addRecord(record1)
assert.strictEqual(1, store.inventory.length)
})










})