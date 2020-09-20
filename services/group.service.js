"use strict";
const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");

module.exports = {
	name: "groups",
	mixins: [DbService],
	adapter: new MongooseAdapter(process.env.MONGO_URI),
	model: mongoose.model("Group", mongoose.Schema({
		name: { type: String },
	}, { timestamps: true})),
	settings: {
		fields: [
			"_id",
			"name",
			// "createdAt",
			"updatedAt"
		]
	}
};
