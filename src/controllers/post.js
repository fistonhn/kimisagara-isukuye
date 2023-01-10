const fs = require('fs-extra');

const generateToken = require("../helper/generateAuthToken");
const Posts = require("../database/models/Posts");
const Users = require("../database/models/Users");

const { onError, onSuccess } = require("../utils/response");

class postController {

  static async createPost(req, res) { 
    const number = req.authUser.number 
    const userFound = await Users.findOne({ number: number });

    if (!userFound) return onError(res, 404, "Ntago wiyandikishije!");

    if (!req.body.title) return onError(res, 401, "Title is required!");
    if (!req.body.description) return onError(res, 401, "Description is required!");
    if (!req.body.cell) return onError(res, 401, "Cell is required!");
    if (!req.body.village) return onError(res, 401, "Village is required!");
    if (!req.body.photos) return onError(res, 401, "Image is required!");

    const newPost = new Posts({ 
      title: req.body.title,
      description: req.body.description,
      cell: req.body.cell,
      village: req.body.village,
      photos: req.body.photos,

  })  

    try {
        const post = await newPost.save()
        return onSuccess(res, 201, "Byemejwe", post);

    } catch (err) {
      console.log(err)
      return onError(res, 500, "Ntago bibashije gukunda wongere mukanya");
    }
  } 

  static async login(req, res) {
    try {
      if (!req.body.number) return onError(res, 401, "Number is required!");
      if (!req.body.password) return onError(res, 401, "Password is required!");

      const user = await Users.findOne({ number: req.body.number });
      if (!user) return onError(res, 401, "Ntago wiyandikishije!");


      if (req.body.password !== user.password) return onError(res, 401, "Ushizemo umubare wibanga utariwo");

      const token = await generateToken(user.id, user.number);
      return res.status(201).json({
        token,
        message: "Login successfully",
      });
    } catch (error) {
      console.log(error)
      return onError(res, 500, "Ntago bibashije gukunda wongere mukanya");
    }
  }

  static async createUser(req, res) {
    try {
      if (!req.body.names) return onError(res, 401, "Names is required!");
      if (!req.body.number) return onError(res, 401, "Number is required!");
      if (!req.body.password) return onError(res, 401, "Password is required!");

      const user = await Users.findOne({ number: req.body.number });
      if (user) return onError(res, 401, "Usanzwe wariyandikishije");

      const newUser = new Users({
        names: req.body.names,
        number: req.body.number,
        password: req.body.password,
      });

      const saveUser = await newUser.save()

      return onSuccess(res, 200, `${saveUser.names} Kwiyandikisha byagenze neza.`);

    } catch (error) {
      console.log(error);
      return onError(res, 500, "internal server error");
    }
  }

  static async getAllPosts(req, res) {
    try {
      const user = req.authUser.number 

      const posts = await Posts.find({number: user});
      if (posts.length===0) return onError(res, 404, "No records at the moment");

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

  static async deletePost(req, res) {
    try {
      const post = await Posts.findOne({ _id: req.params.id })
      if (!post) return onError(res, 404, "Post not found!");

      await Posts.deleteOne({ _id: req.params.id })
      return onSuccess( res, 200, `Post successfully deleted`);

    } catch (error) {
      return onError(res, 500, "internal server error");
    }
  }

}
module.exports = postController;
