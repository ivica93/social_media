const { Router } = require("express");
const verifyToken = require("../midleweare/verifyToken");
const router = new Router();

router.get("/all/:postId", require("../controler/commentControler/allComments"));

router.get("/:id", require("../controler/commentControler/getComments"));

router.delete("/:id", verifyToken, require("../controler/commentControler/deleteCommentController"));

router.post("/add", verifyToken, require("../controler/commentControler/addComment"));

router.put("/:id", verifyToken, require("../controler/commentControler/updateComment"));

module.exports = router;