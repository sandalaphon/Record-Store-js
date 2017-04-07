var assert = require('assert')
var Record = require('../record')
var RecordStore = require('../record_store')


describe('record', function(){
  var record1
  var store 
  beforeEach(function(){
    record1 = new Record("Pink Floyd", "Dark Side of the Moon", "rock", 1000)
    record2 = new Record("The Rolling Stones", "Hot Lips", "rock", 1100)
    record3 = new Record("BB king", "Best of BB King", "blues", 1200)
    store = new RecordStore("Really Good Records", "San Francisco")
  })

it('record has artist', function(){
assert.strictEqual("Pink Floyd" , record1.artist)
store.addRecord(record1)
assert.strictEqual(1, store.inventory.length)
})

it('can print inventory', function(){
store.emptyInventory()
store.addRecord(record1)
store.addRecord(record2)
assert.strictEqual('Dark Side of the Moon by Pink Floyd\nMusic genre: rock\nPrice: 1000\nHot Lips by The Rolling Stones\nMusic genre: rock\nPrice: 1100\n', store.printStringInventory())
})

it("selling record gets cash and reduces inventory", function(){
  store.emptyInventory()
  store.addRecord(record1)
  store.addRecord(record2)
  store.sellARecord("Dark Side of the Moon", "Pink Floyd")
  assert.strictEqual(1, store.inventory.length)
  assert.strictEqual(1000, store.balance)
})

it("can get inventory value", function(){
  store.emptyInventory()
  store.addRecord(record1)
  store.addRecord(record2)
  assert.strictEqual(2100, store.inventoryTotal())
})

it("can get inventory value plus balance", function(){
  var store1 = new RecordStore("Really Good Records", "San Francisco")
  store1['balance'] = 1000
  store1.addRecord(record1)
  store1.addRecord(record2)
  assert.strictEqual(3100, store1.financialSnapshot())
})

it("get by genre", function(){
  var store1 = new RecordStore("Really Good Records", "San Francisco")
  
  store1.addRecord(record1)
  store1.addRecord(record2)
  store1.addRecord(record3)
  assert.strictEqual(2, store1.getRecordByGenre("rock").length)
})














})