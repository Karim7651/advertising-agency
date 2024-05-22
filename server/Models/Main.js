const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mainSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Instagram: {
        type: String
    },
    Facebook: {
        type: String
    },
    X: {
        type: String
    },
    Image: {
        type: String  // Store the image file name or URL
    }
}, { timestamps: true });

const Main = mongoose.model("Main", mainSchema);
module.exports = Main;
