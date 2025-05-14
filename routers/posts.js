const express = require("express");
const router = express.Router();
let postController = require("../controllers/postsController");

// # index
router.get("/", postController.index);

//  # show
router.get("/:id", postController.show);

// # store
router.post("/", postController.store);

// # update
router.put("/:id", postController.update);

//  # modify
router.patch("/:id", postController.modify);

//  # destroy
router.delete("/:id", postController.destroy);
module.exports = router;
