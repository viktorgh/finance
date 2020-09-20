const MongooseAdapter = require("moleculer-db-adapter-mongoose");

module.exports = new MongooseAdapter(process.env.MONGO_URI);
