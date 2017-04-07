var assert = require('assert')
var Record = require('../record')
var RecordStore = require('../record_store')
var RecordCollector = require('../record_collector')

describe('record', function(){
  var record1
  var store 
  var collector1
  beforeEach(function(){
    record1 = new Record("Pink Floyd", "Dark Side of the Moon", "rock", 1000)
    record2 = new Record("The Rolling Stones", "Hot Lips", "rock", 1100)
    record3 = new Record("BB king", "Best of BB King", "blues", 1200)
    store = new RecordStore("Really Good Records", "San Francisco")
    collector1 = new RecordCollector(2100)
    collector2 = new RecordCollector(5000)
  })

  it("collector buys records", function(){
    collector1.buyRecord(record1)
    collector1.buyRecord(record2)
    assert.strictEqual(2, collector1.collection.length)
  })

  it("collector cant afford record 3", function(){
      collector1.buyRecord(record1)
      collector1.buyRecord(record2)
      collector1.buyRecord(record3)
      assert.strictEqual(2, collector1.collection.length)
    })

  it("collector can sell record", function(){
      collector1.buyRecord(record1)
      collector1.buyRecord(record2)
     collector1.sellRecord(record2)
      assert.strictEqual(1100, collector1.cash)
    })

  it("view total value of collection", function(){
    collector1.buyRecord(record1)
    collector1.buyRecord(record2)
    assert.strictEqual(2100, collector1.collectionValue())
  })

  it("get genre value", function(){
    collector2.buyRecord(record1)
    collector2.buyRecord(record2)
    collector2.buyRecord(record3)
    assert.strictEqual(1200, collector2.genreValue("blues"))
  })

  it("details of most valuable record", function(){
    collector2.buyRecord(record1)
    collector2.buyRecord(record2)
    collector2.buyRecord(record3)
    assert.strictEqual('Best of BB King by BB king\nMusic genre: blues\nPrice: 1200\n', collector2.viewMostValuable())
  })

  it("ascending value sort", function(){
    collector2.buyRecord(record2)
    collector2.buyRecord(record1)
    collector2.buyRecord(record3)
    assert.deepEqual([record1, record2, record3], collector2.ascendingValueSort())
  })

  it("decending value sort", function(){
    collector2.buyRecord(record2)
    collector2.buyRecord(record1)
    collector2.buyRecord(record3)
    assert.deepEqual([record3, record2, record1], collector2.decendingValueSort())
  })

  it("can compare collection value", function(){
    collector1.buyRecord(record2)
    collector1.buyRecord(record1)
    collector2.buyRecord(record2)
    collector2.buyRecord(record1)
    collector2.buyRecord(record3)
    assert.strictEqual(collector2, collector1.compareCollectionValue(collector2))
  })


})