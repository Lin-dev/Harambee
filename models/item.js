var mongoose = require("mongoose");

// SCHEMA SET UP
var itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      username: String
    },
    created: {
      type: Date,
      default: Date.now
    }
});

var Item = mongoose.model("Item", itemSchema);
module.exports = Item;
