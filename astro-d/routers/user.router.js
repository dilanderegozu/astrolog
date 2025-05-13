const controller = require("../controllers/index");
const router = require("express").Router();
const validation = require("../validations/index");

router.post("/createuser", validation.userValidator.validateCreate(), controller.user.createUser);
router.delete("/deleteUser/:id", validation.userValidator.validateDelete(), controller.user.deleteUser);
router.post("/loginUser", validation.userValidator.validateLogin);
router.get("/getUserById/:id", validation.userValidator.validateGetById(), controller.user.getUserById);
router.put("/updateUserInfo/:id", validation.userValidator.validateUpdateUserInfo(), controller.user.updateUserInfo);
module.exports = {
    user:router
}