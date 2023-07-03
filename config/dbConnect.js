const { Sequelize } = require("sequelize");
require("../env");

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER_NAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.HOST,
		dialect: "mysql",
		logging: false,
	}
);

const dbClose = () => {
	sequelize.close();
};

module.exports = { sequelize };
