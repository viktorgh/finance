"use strict";
const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const mongoose = require("mongoose");

module.exports = {
	name: "categories",
	mixins: [DbService],
	adapter: new MongooseAdapter(process.env.MONGO_URI),
	model: mongoose.model("Category", mongoose.Schema({
		name: { type: String },
		type: { type: String, enum: ["INCOME", "OUTCOME"], default: "INCOME"},
		isFavorite: { type: Boolean, default: true },
		isVisible: { type: Boolean, default: true },
		parent: {  type: mongoose.Schema.Types.ObjectId, ref: "Category" },
		children: [{  type: mongoose.Schema.Types.ObjectId, ref: "Category" }]
	}, { timestamps: true})),
	settings: {
		populates: {
			parent: "categories.get",
			children: "categories.find"
		},
		fields: [
			"_id",
			"name",
			"parent",
			"children",
			"isFavorite",
			"isVisible"
		]
	}
};
