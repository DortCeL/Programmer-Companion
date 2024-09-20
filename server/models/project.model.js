const { model, Schema } = require("mongoose");

const projectSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		features: {
			type: [String],
			required: false,
			default: ["Default Feature"],
		},
		color: {
			type: String,
			required: false,
			default: "#ccc",
		},
	},
	{ timestamps: true }
);

const Project = model("Project", projectSchema);
module.exports = Project;
