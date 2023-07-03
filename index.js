const express = require("express");
const userRouter = require("./modules/users/userRoute");
const { sequelize } = require("./config/dbConnect");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", userRouter);

const PORT = process.env.PORT || 5000;

const startApplication = async () => {
	try {
		await sequelize.authenticate();
		console.log("Database connected successfully");

		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startApplication();
