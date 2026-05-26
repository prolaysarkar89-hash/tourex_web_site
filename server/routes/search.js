const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/suggest', searchController.suggest);
router.get('/places', searchController.searchPlaces);
router.get('/details', searchController.getPlaceDetails);

module.exports = router;
