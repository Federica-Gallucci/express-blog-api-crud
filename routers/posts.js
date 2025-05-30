const express = require("express");
const router = express.Router();
let postController = require("../controllers/postsController");

router.get("/", postController.index);
router.get("/:id", postController.show);
router.post("/", postController.store);
router.put("/:id", postController.update);
router.patch("/:id", postController.modify);
router.delete("/:id", postController.destroy);

module.exports = router;
