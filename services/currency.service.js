"use strict";
const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");

module.exports = {
	name: "currency",
	mixins: [DbService],
	adapter: new MongooseAdapter(process.env.MONGO_URI),
	model: mongoose.model("Currency", mongoose.Schema({
		name: { type: String, required: true },
		code: { type: String, required: true },
		icon: { type: String },
		symbol: { type: String },
	}, { timestamps: true})),
	settings: {
		fields: [
			"_id",
			"name",
			"code",
			"icon",
			"symbol"
		]
	}
};
