const mongoose = require('mongoose');

// schema
const bookSchema = new mongoose.Schema({

    title : {
        type: String,
        required: true,
    },
    author : {
        type: String,
        required: true,
    },
},{ timestamps: true });

// model
const Book = mongoose.model("book", bookSchema); // books -> collection name

// export Book 
module.exports = Book;