const Joi = require("joi");

const userRegisterValidator = (req, res, next) => {
	const authSchema = Joi.object({
		fullname: Joi.string().required().messages({
			"any.required": "Fullname is required",
		}),
		email: Joi.string().email().required().messages({
			"string.email": "Invalid email formate",
			"any.required": "Email is required",
		}),
		password: Joi.string()
			.pattern(new RegExp("^[a-zA-Z0-9@$.&]{5,30}$"))
			.required()
			.messages({
				"string.pattern.base":
					"Password must be alphanumeric and between 5 and 30 characters",
				"any.required": "Password is required",
			}),
		confirmPassword: Joi.string()
			.valid(Joi.ref("password"))
			.required()
			.messages({
				"any.only": "Password must match",
				"any.required": "Cnfirm password is required",
			}),
	}).with("password", "confirmPassword");

	const validation = authSchema.validate(req.body);
	const { error } = validation;

	if (error) {
		const message = error.details.map((x) => x.message);
		return res.status(400).json({ message });
	}
	next();
};

const userLoginValidator = (req, res, next) => {
	const authSchema = Joi.object({
		email: Joi.string().email().required().messages({
			"string.email": "Invalid email formate",
			"any.required": "Email is required",
		}),
		password: Joi.string()
			.pattern(new RegExp("^[a-zA-Z0-9@$.&]{5,30}$"))
			.required()
			.messages({
				"string.pattern.base":
					"Password must be alphnumeric and between 5 to 30 characters",
				"any.required": "Password is required",
			}),
	});

	const { email, password } = req.body;
	const validation = authSchema.validate({ email, password });

	const { error } = validation;

	if (error) {
		const errorMessage = error.details.map((error) => error.message);
		return res.status(400).json({ errorMessage });
	}
	next();
};

module.exports = { userRegisterValidator, userLoginValidator };
