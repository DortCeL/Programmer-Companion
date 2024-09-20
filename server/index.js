const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (_req, res) => {
	res.json({ message: "HI" });
});

const port = 4000;
mongoose
	.connect("mongodb://localhost:27017/ProgrammerCompanion")
	.then(() => {
		app.listen(port, () => {
			console.log(`Connected to DB`);
			console.log(`listening on port ${port}`);
		});
	})
	.catch((error) => console.log(error));
