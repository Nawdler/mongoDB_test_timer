var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TimeSchema   = new Schema({
    time: Date
});

var Time = mongoose.model("Time", TimeSchema);

module.exports = Time;