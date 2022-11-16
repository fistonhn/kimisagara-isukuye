const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  username: {
    type: String,
  },
  tunnel: {
    type: String,
  },
  date: {
    type: String,
  },
  advanceName: {
    type: String,
  },
  advanceLocationFrom: {
    type: String,
  },
  advanceLocationTo: {
    type: String,
  },
  depthCover: {
    type: String,
  },
  driveDirection: {
    type: String,
  },
  excavated: {
    type: String,
  },
  overbreak: {
    type: String,
  },
  underbreak: {
    type: String,
  },
  excavationSection: {
    type: String,
  },
  excavationMethod: {
    type: String,
  },
  ressNo: {
    type: String,
  },
  facemappingSketchImg: {
    type: String,
  },
  water: {
    type: String,
  },
  lPerMinPerM: {
    type: String,
  },
  geologicalStructures: {
    type: String,
  },
  setNo1: {
    type: String,
  },
  setNo2: {
    type: String,
  },
  setNo3: {
    type: String,
  },
  setNo4: {
    type: String,
  },
  setNo5: {
    type: String,
  },
  setNo6: {
    type: String,
  },
  type1: {
    type: String,
  },
  type2: {
    type: String,
  },
  type3: {
    type: String,
  },
  type4: {
    type: String,
  },
  type5: {
    type: String,
  },
  type6: {
    type: String,
  },
  dip1: {
    type: String,
  },
  dip2: {
    type: String,
  },
  dip3: {
    type: String,
  },
  dip4: {
    type: String,
  },
  dip5: {
    type: String,
  },
  dip6: {
    type: String,
  },
  dipDirection1: {
    type: String,
  },
  dipDirection2: {
    type: String,
  },
  dipDirection3: {
    type: String,
  },
  dipDirection4: {
    type: String,
  },
  dipDirection5: {
    type: String,
  },
  dipDirection6: {
    type: String,
  },
  roughness1: {
    type: String,
  },
  roughness2: {
    type: String,
  },
  roughness3: {
    type: String,
  },
  roughness4: {
    type: String,
  },
  roughness5: {
    type: String,
  },
  roughness6: {
    type: String,
  },
  infilling1: {
    type: String,
  },
  infilling2: {
    type: String,
  },
  infilling3: {
    type: String,
  },
  infilling4: {
    type: String,
  },
  infilling5: {
    type: String,
  },
  infilling6: {
    type: String,
  },
  weathering1: {
    type: String,
  },
  weathering2: {
    type: String,
  },
  weathering3: {
    type: String,
  },
  weathering4: {
    type: String,
  },
  weathering5: {
    type: String,
  },
  weathering6: {
    type: String,
  },
  spacing1: {
    type: String,
  },
  spacing2: {
    type: String,
  },
  spacing3: {
    type: String,
  },
  spacing4: {
    type: String,
  },
  spacing5: {
    type: String,
  },
  spacing6: {
    type: String,
  },


  aperture1: {
    type: String,
  },
  aperture2: {
    type: String,
  },
  aperture3: {
    type: String,
  },
  aperture4: {
    type: String,
  },
  aperture5: {
    type: String,
  },
  aperture6: {
    type: String,
  },


  persistence1: {
    type: String,
  },
  persistence2: {
    type: String,
  },
  persistence3: {
    type: String,
  },
  persistence4: {
    type: String,
  },
  persistence5: {
    type: String,
  },
  persistence6: {
    type: String,
  },


  
  remarks1: {
    type: String,
  },
  remarks2: {
    type: String,
  },
  remarks3: {
    type: String,
  },
  remarks4: {
    type: String,
  },
  remarks5: {
    type: String,
  },
  remarks6: {
    type: String,
  },


  strength: {
    type: String,
  },
  brightness: {
    type: String,
  },
  tincture: {
    type: String,
  },
  colour: {
    type: String,
  },
  texture: {
    type: String,
  },
  weather: {
    type: String,
  },  
  grainSize: {
    type: String,
  },
  igneousRock: {
    type: String,
  },
  otherRockType: {
    type: String,
  },
  additionalDescription: {
    type: String,
  },
  notes: {
    type: String,
  },
  photos: {
    type: String,
  },  
  qIndex: {
    type: String,
  }, 
  massQuality: {
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
