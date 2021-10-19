
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.users = require("./users.model.js")(mongoose);

module.exports = db;
