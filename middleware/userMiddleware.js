const jwt = require("jsonwebtoken");
const userModel = require("../modules/users/userModel");

const userToken = async (req, res, next) => {
	try {
		const { email } = req.body;

		const foundUser = await userModel.findAll({ where: { email } });

		const username = foundUser[0].dataValues.fullname;

		// console.log(username);

		jwt.sign(
			{ username, email },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" },
			(error, token) => {
				if (error) {
					return res.status(400).json({ msg: "Error generating token" });
				}
				req.token = token;
				next();
			}
		);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { userToken };
