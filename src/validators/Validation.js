const Joi = require("joi");

// validation schema
const postValidation = (data) => {
  const schema = Joi.object({
    tunnel: Joi.string().required(),
    date: Joi.date().required(),
    advanceName: Joi.string().required(),
    advanceLocationFrom: Joi.string().required(),
    advanceLocationTo: Joi.string().required(),
    depthCover: Joi.string().required(),
    driveDirection: Joi.string().required(),
    excavated: Joi.string().required(),
    overbreak: Joi.string().required(),
    underbreak: Joi.string().required(),

    excavationSection: Joi.string().required(),
    excavationMethod: Joi.string().required(),
    ressNo: Joi.string().required(),

    facemappingSketchImg: Joi.string(),
    water: Joi.string().required(),
    lPerMinPerM: Joi.string().required(),
    geologicalStructures: Joi.string().required(),

    setNo1: Joi.string().required(),
    setNo2: Joi.string().required(),
    setNo3: Joi.string().required(),
    setNo4: Joi.string().required(),
    setNo5: Joi.string().required(),
    setNo6: Joi.string().required(),

    type1: Joi.string().required(),
    type2: Joi.string().required(),
    type3: Joi.string().required(),
    type4: Joi.string().required(),
    type5: Joi.string().required(),
    type6: Joi.string().required(),

    dip1: Joi.string().required(),
    dip2: Joi.string().required(),
    dip3: Joi.string().required(),
    dip4: Joi.string().required(),
    dip5: Joi.string().required(),
    dip6: Joi.string().required(),

    dipDirection1: Joi.string().required(),
    dipDirection2: Joi.string().required(),
    dipDirection3: Joi.string().required(),
    dipDirection4: Joi.string().required(),
    dipDirection5: Joi.string().required(),
    dipDirection6: Joi.string().required(),

    roughness1: Joi.string().required(),
    roughness2: Joi.string().required(),
    roughness3: Joi.string().required(),
    roughness4: Joi.string().required(),
    roughness5: Joi.string().required(),
    roughness6: Joi.string().required(),

    infilling1: Joi.string().required(),
    infilling2: Joi.string().required(),
    infilling3: Joi.string().required(),
    infilling4: Joi.string().required(),
    infilling5: Joi.string().required(),
    infilling6: Joi.string().required(),

    weathering1: Joi.string().required(),
    weathering2: Joi.string().required(),
    weathering3: Joi.string().required(),
    weathering4: Joi.string().required(),
    weathering5: Joi.string().required(),
    weathering6: Joi.string().required(),

    spacing1: Joi.string().required(),
    spacing2: Joi.string().required(),
    spacing3: Joi.string().required(),
    spacing4: Joi.string().required(),
    spacing5: Joi.string().required(),
    spacing6: Joi.string().required(),

    aperture1: Joi.string().required(),
    aperture2: Joi.string().required(),
    aperture3: Joi.string().required(),
    aperture4: Joi.string().required(),
    aperture5: Joi.string().required(),
    aperture6: Joi.string().required(),

    persistence1: Joi.string().required(),
    persistence2: Joi.string().required(),
    persistence3: Joi.string().required(),
    persistence4: Joi.string().required(),
    persistence5: Joi.string().required(),
    persistence6: Joi.string().required(),

    remarks1: Joi.string().required(),
    remarks2: Joi.string().required(),
    remarks3: Joi.string().required(),
    remarks4: Joi.string().required(),
    remarks5: Joi.string().required(),
    remarks6: Joi.string().required(),


    strength: Joi.string().required(),
    brightness: Joi.string().required(),
    tincture: Joi.string().required(),
    colour: Joi.string().required(),
    texture: Joi.string().required(),
    weather: Joi.string().required(),
    grainSize: Joi.string().required(),
    igneousRock: Joi.string().required(),
    otherRockType: Joi.string().required(),
    additionalDescription: Joi.string().required(),
    notes: Joi.string().required(),
    photos: Joi.string(),
    qIndex: Joi.string(),
    massQuality: Joi.string(),


  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(4).required(),
  });
  return schema.validate(data);
};

module.exports ={ postValidation, loginValidation };
