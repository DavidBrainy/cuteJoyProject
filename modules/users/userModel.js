const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/dbConnect");

const user = sequelize.define(
	"user",
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		fullname: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
	}
);

sequelize
	.sync()
	.then(() => {
		console.log("User table synchronized successfully");
	})
	.catch(() => {
		console.log(error);
	});

module.exports = user;
