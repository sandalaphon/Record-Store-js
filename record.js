var Record = function(artist, title, genre, price){
this.artist = artist
this.title = title
this.genre = genre
this.price = price
}

Record.prototype.details = function() {
  // console.log(this.title + " by " + this.artist + "\nMusic genre: " + this.genre + "\nPrice: " + this.price)
  return this.title + " by " + this.artist + "\nMusic genre: " + this.genre + "\nPrice: " + this.price + "\n"
};








module.exports = Record