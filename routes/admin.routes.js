const admincontroller = require("../controllers/Admin.controller");
const router = require("express").Router();

router.post("/register", admincontroller.register);
router.post("/login", admincontroller.login);

module.exports = router;