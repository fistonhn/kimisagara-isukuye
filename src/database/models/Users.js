const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 50,
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

const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
