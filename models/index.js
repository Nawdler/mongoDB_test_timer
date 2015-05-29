var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');

module.exports.Time = require("./time.js")