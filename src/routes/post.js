const express = require("express");
const postController = require("../controllers/post");
const Validator = require("../middlewares/validator");
const verifyUserAuthToken = require("../middlewares/verifyToken");
const upload = require("../middlewares/uploads");


const router = express.Router();

router.post("/signup",  postController.createUser);
router.post("/login", [ Validator.loginValidator ], postController.login);
router.post("/createPost", [ upload, Validator.postValidator, verifyUserAuthToken ], postController.createPost);

router.get("/getAllPosts", [ verifyUserAuthToken ], postController.getAllPosts);
router.get("/getOnePost/:id", [ verifyUserAuthToken ], postController.getOnePost);



module.exports = router;
