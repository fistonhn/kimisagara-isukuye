const mongoose = require("mongoose");

const postSchema = mongoose.Schema({ 
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  cell: {
    type: String,
  },
  village: {
    type: String,
  },
  photos: {
    type: String,
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

const employeeModel = mongoose.model("Posts", postSchema);
module.exports = employeeModel;
