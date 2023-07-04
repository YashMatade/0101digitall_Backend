const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const admin_schema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model("admin_schema", admin_schema);