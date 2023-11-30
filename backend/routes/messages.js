const { Router } = require("express");
const verifyToken = require("../midleweare/verifyToken");
const router = new Router();

router.get("/sentMessages", verifyToken, require("../controler/messagesControler/sentMessages"));

router.get("/receivedMessages", verifyToken, require("../controler/messagesControler/receivedMessages"));

router.post("/addMessage/:userId", verifyToken, require("../controler/messagesControler/addMessage"));

module.exports = router;