const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true
	},
	password: String,
	// Add keys to settings when a new setting is developed
	// settings: {}
	cat: Array,
	links: [{ 
		url: String, 
		cat: {
			type: String,
			default: "none" 
		}
	}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;