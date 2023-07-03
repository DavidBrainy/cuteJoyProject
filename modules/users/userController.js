const userModel = require("./userModel");
const bcrypt = require("bcrypt");

const userRegistration = async (req, res) => {
	try {
		const { email, password } = req.body;

		const userExit = await userModel.findOne({ where: { email } });

		if (userExit) {
			return res.status(401).json({ msg: "Email already in use" });
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const userData = { ...req.body, password: hashedPassword };

		const newUser = await userModel.create(userData);

		res.status(200).json({ msg: "User registered successfully" });
	} catch (error) {
		res.status(400).json({ error });
	}
};

const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const token = req.token;

		const userExit = await userModel.findAll({ where: { email } });

		const hashedPassword = userExit[0].dataValues.password;
		const id = userExit[0].dataValues.id;
		const name = userExit[0].dataValues.fullname;

		const user = { id, name, email };

		// console.log(user);

		if (!userExit) {
			return res.status(400).json({ msg: "Invalid Credentials" });
		}

		const isMatch = await bcrypt.compare(password, hashedPassword);
		if (!isMatch) {
			return res.status(400).json({ msg: "Invalid Credentials" });
		}

		res.status(200).json({ msg: "Login successful", token, user });
	} catch (error) {
		console.log(error);
	}
};

module.exports = { userRegistration, userLogin };
