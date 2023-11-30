const { Router } = require("express");
const verifyToken = require("../midleweare/verifyToken");
const router = new Router();

/** GET */
router.get("/", require("../controler/userControler/getAllUsers"));

/** POST */
router.post("/add", require("../controler/userControler/addUser"));

/** PUT */
router.put("/update/:userId", verifyToken, require("../controler/userControler/updateUser"));

/** DELETE */
router.delete("/delete/:userId", verifyToken, require("../controler/userControler/deleteUser"));

module.exports = router;