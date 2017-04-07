var Record = require('./record.js')

var RecordStore = function(name, city){
  this.name = name
  this.city = city
  this.inventory = []
  this.balance = 0
}

RecordStore.prototype.addRecord = function(record) {
  this.inventory.push(record)
};

RecordStore.prototype.printStringInventory = function() {
  var inventoryDetails = ""
  this.inventory.forEach(function(record){
    inventoryDetails += record.details()
  })
  console.log(inventoryDetails)
  return inventoryDetails
}

RecordStore.prototype.emptyInventory = function() {
  this.inventory = []
};

RecordStore.prototype.sellARecord = function(title, artist) {
  this.inventory.forEach(function(record, index, inventory){
    if(record.title ===title && record.artist===artist){
      inventory.splice(index, 1)
      this.balance += record.price
    }
  }.bind(this))
};

RecordStore.prototype.inventoryTotal = function() {
  var sum = 0
  this.inventory.forEach(function(record){
    sum += record.price
  }.bind(this))
  return sum
};

RecordStore.prototype.financialSnapshot = function() {
  return this.inventoryTotal() + this.balance
};

RecordStore.prototype.getRecordByGenre = function(genre) {
  var genreSelection=[]
  this.inventory.forEach(function(record){
    if(record.genre === genre){
      genreSelection.push(record)
    }
  }.bind(this))
  return genreSelection
};



module.exports = RecordStore