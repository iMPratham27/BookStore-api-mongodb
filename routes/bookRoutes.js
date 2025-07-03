const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes
router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookById);

router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.deleteBook);


// Export that router so it can be used in index.js
module.exports = router;