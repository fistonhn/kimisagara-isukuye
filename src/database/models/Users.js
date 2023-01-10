const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  names: {
    type: String,
  },
  number: {
    type: String,
  },
  password: {
    type: String,
    required: true,

  },

},
  {
    toJSON: {
    virtuals: true,
    getters: true,
  },
  timestamps: true,
  }
);

const adminModel = mongoose.model("Users", adminSchema);
module.exports = adminModel;
