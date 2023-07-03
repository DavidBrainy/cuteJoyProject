const route = require("express").Router;
const userController = require("./userController");
const {
	userRegisterValidator,
	userLoginValidator,
} = require("../../validators/userValidator");
const { userToken } = require("../../middleware/userMiddleware");

const userRouter = route();

userRouter.post(
	"/api/register",
	userRegisterValidator,
	userController.userRegistration
);

userRouter.post(
	"/api/login",
	userLoginValidator,
	userToken,
	userController.userLogin
);

module.exports = userRouter;
