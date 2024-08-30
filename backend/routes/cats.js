const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { getCats, createCat, deleteCat } = require('../controllers/catController');

router.get('/', getCats);

router.post('/', upload.single('image'), createCat);

router.delete('/:id', deleteCat);

module.exports = router;
