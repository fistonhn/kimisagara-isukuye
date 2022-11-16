const generateToken = require("../helper/generateAuthToken");
const Posts = require("../database/models/Posts");
const Users = require("../database/models/Users");

const { onError, onSuccess } = require("../utils/response");

class postController {

  static async createPost(req, res) {
    if (!req.files.facemappingSketchImg[0]) return onError(res, 400, "Image sketch is required");
    if (!req.files.photos[0]) return onError(res, 400, "Please upload a photos");

    const urlToFacemappingSketchImg = req.files.facemappingSketchImg[0].path;
    const urlToPhotos = req.files.photos[0].path;

    const username = req.authUser.username 
    
    const userFound = await Users.findOne({ username: username });
      if (!userFound) return onError(res, 404, "user not found");

    const newPost = new Posts({
      username: username,
      tunnel: req.body.tunnel,
      date: req.body.date,
      advanceName: req.body.advanceName,
      advanceLocationFrom: req.body.advanceLocationFrom,
      advanceLocationTo: req.body.advanceLocationTo,
      depthCover: req.body.depthCover,
      driveDirection: req.body.driveDirection,
      excavated: req.body.excavated,
      overbreak: req.body.overbreak,
      underbreak: req.body.underbreak,
      excavationSection: req.body.excavationSection,
      excavationMethod: req.body.excavationMethod,
      ressNo: req.body.ressNo,
  
      facemappingSketchImg: urlToFacemappingSketchImg,
      water: req.body.water,
      lPerMinPerM: req.body.lPerMinPerM,
      geologicalStructures: req.body.geologicalStructures,
  
      setNo1: req.body.setNo1,
      setNo2: req.body.setNo2,
      setNo3: req.body.setNo3,
      setNo4: req.body.setNo4,
      setNo5: req.body.setNo5,
      setNo6: req.body.setNo6,
  
      type1: req.body.type1,
      type2: req.body.type2,
      type3: req.body.type3,
      type4: req.body.type4,
      type5: req.body.type5,
      type6: req.body.type6,
  
      dip1: req.body.dip1,
      dip2: req.body.dip2,
      dip3: req.body.dip3,
      dip4: req.body.dip4,
      dip5: req.body.dip5,
      dip6: req.body.dip6,
  
      dipDirection1: req.body.dipDirection1,
      dipDirection2: req.body.dipDirection2,
      dipDirection3: req.body.dipDirection3,
      dipDirection4: req.body.dipDirection4,
      dipDirection5: req.body.dipDirection5,
      dipDirection6: req.body.dipDirection6,
  
      roughness1: req.body.roughness1,
      roughness2: req.body.roughness2,
      roughness3: req.body.roughness3,
      roughness4: req.body.roughness4,
      roughness5: req.body.roughness5,
      roughness6: req.body.roughness6,
  
      infilling1: req.body.infilling1,
      infilling2: req.body.infilling2,
      infilling3: req.body.infilling3,
      infilling4: req.body.infilling4,
      infilling5: req.body.infilling5,
      infilling6: req.body.infilling6,
  
      weathering1: req.body.weathering1,
      weathering2: req.body.weathering2,
      weathering3: req.body.weathering3,
      weathering4: req.body.weathering4,
      weathering5: req.body.weathering5,
      weathering6: req.body.weathering6,
  
      spacing1: req.body.spacing1,
      spacing2: req.body.spacing2,
      spacing3: req.body.spacing3,
      spacing4: req.body.spacing4,
      spacing5: req.body.spacing5,
      spacing6: req.body.spacing6,
  
      aperture1: req.body.aperture1,
      aperture2: req.body.aperture2,
      aperture3: req.body.aperture3,
      aperture4: req.body.aperture4,
      aperture5: req.body.aperture5,
      aperture6: req.body.aperture6,
  
      persistence1: req.body.persistence1,
      persistence2: req.body.persistence2,
      persistence3: req.body.persistence3,
      persistence4: req.body.persistence4,
      persistence5: req.body.persistence5,
      persistence6: req.body.persistence6,
  
      remarks1: req.body.remarks1,
      remarks2: req.body.remarks2,
      remarks3: req.body.remarks3,
      remarks4: req.body.remarks4,
      remarks5: req.body.remarks5,
      remarks6: req.body.remarks6,
  
  
      strength: req.body.strength,
      brightness: req.body.brightness,
      tincture: req.body.tincture,
      colour: req.body.colour,
      texture: req.body.texture,
      weather: req.body.weather,
      grainSize: req.body.grainSize,
      igneousRock: req.body.igneousRock,
      otherRockType: req.body.otherRockType,
      additionalDescription: req.body.additionalDescription,
      notes: req.body.notes,
      photos: urlToPhotos,
      qIndex: req.body.qIndex,
      massQuality: req.body.massQuality,
  })  
    try {
        const post = await newPost.save()
        return onSuccess(res, 201, "Created successfully", post);

    } catch (err) {
      console.log(err)
      return onError(res, 500, "internal server error");
    }
  } 

  static async login(req, res) {
    try {
      const user = await Users.findOne({ email: req.body.email });
      if (!user) return onError(res, 401, "user not found");


      if (req.body.password !== user.password) return onError(res, 401, "Incorrect Password");

      const token = await generateToken(user.id, user.username);
      return res.status(201).json({
        token,
        message: "Login successfully",
      });
    } catch (error) {
      console.log(error)
      return onError(res, 500, "Internal Server Error");
    }
  }

  static async createUser(req, res) {
    try {
      const user = await Users.findOne({ username: req.body.username });
      if (user) return onError(res, 401, "User already existed");

      const newUser = new Users({
        username: req.body.username,
        password: req.body.password,
      });

      const saveUser = await newUser.save()

      return onSuccess(res, 200, `${saveUser.username} successfully registered`);

    } catch (error) {
      console.log(error);
      return onError(res, 500, "internal server error");
    }
  }

  static async getAllPosts(req, res) {
    try {
      const posts = await Posts.find();
      if (!posts) return onError(res, 404, "No records at the moment");

      return onSuccess(
        res,
        200,
        `Successfully fetched all posts`,
        posts
      );
    } catch (error) {
      return onError(res, 500, "internal server error");
    }
  }

  static async getOnePost(req, res) {
    try {
      const post = await Posts.findOne({ _id: req.params.id })
      if (!post) return onError(res, 404, "No record at the moment");

      return onSuccess(
        res,
        200,
        `Post Successfully fetched`, 
        post
      );

    } catch (error) {
      console.log('error', error)
      return onError(res, 500, "internal server error");
    }
  }

}
module.exports = postController;
