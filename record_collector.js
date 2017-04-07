var RecordCollector = function(cash){
   this.cash = cash
   this.collection = []
}

RecordCollector.prototype = {

  buyRecord: function(record){
    if(this.cash>=record.price){
      this.collection.push(record)
      this.cash -= record.price
    }
  },

  sellRecord: function(recordToSell){
    this.collection.forEach(function(record, index, array){
      if(recordToSell==record){
        array.splice(index,1)
        this.cash += recordToSell.price
      }
    }.bind(this))
  },

  collectionValue: function(){
    return this.collection.reduce(function(acc, record){
      return acc + record.price
    }.bind(this),0)
  },

  genreValue: function(genre){
    return this.collection.reduce(function(acc, record){
      return record.genre===genre ? acc +record.price : acc
    }.bind(this),0)
  },

  findMostValuable: function(){
    return this.collection.reduce(function(acc, record){
      return record.price>acc.price ? record : acc
    }.bind(this))
  },

  viewMostValuable: function(){
    return this.findMostValuable().details()
  },

  ascendingValueSort: function(){
  return  this.collection.sort(function(record1,record2){
        return record1.price - record2.price
    })
  },

  decendingValueSort: function(){
  return  this.collection.sort(function(record1,record2){
        return record2.price - record1.price
    })
  },

  compareCollectionValue: function(collector2){
    if (this.collectionValue()>collector2.collectionValue()){
      return this
    }else{
      return collector2
    }
  }


};
module.exports = RecordCollector