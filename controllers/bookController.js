const Book = require('../models/bookModel');


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
        return res.status(404).json({ message: "Book not found" });
        }

        res.json(book);
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const createBook = async (req, res) => {
    try {
        const { title, author } = req.body;

        if (!title || !author) {
        return res.status(400).json({ message: "Title and author are required" });
        }

        const newBook = await Book.create({ title, author });

        res.status(201).json({ message: "Added new book", newBook });
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const updateBook = async (req, res) => {
    try {
        const { title, author } = req.body;

        const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        { title, author },
        { new: true, runValidators: true }
        );

        if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book updated", updatedBook });
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book deleted", deletedBook });
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// export all functions
module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}