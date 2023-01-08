const express = require("express");
const postController = require("../controllers/post");
const verifyUserAuthToken = require("../middlewares/verifyToken");
const upload = require("../middlewares/uploads");


const router = express.Router();

router.post("/signup",  postController.createUser);
router.post("/login", postController.login);
router.post("/createPost", [ upload, verifyUserAuthToken ], postController.createPost);

router.get("/getAllPosts", [ verifyUserAuthToken ], postController.getAllPosts);
router.get("/getOnePost/:id", [ verifyUserAuthToken ], postController.getOnePost);

router.delete("/deletePost/:id", [ verifyUserAuthToken ], postController.deletePost);


module.exports = router;
