const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const schema= mongoose.Schema;

const bookSchema = new Schema({
    name:{
        type: string,
        required: true
    },
    author: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean   
    }
})

module.exports = mongoose.model("Book", bookSchema);


