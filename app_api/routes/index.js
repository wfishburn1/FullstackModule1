const express = require('express'); //express app
const router = express.Router(); //Router logic

//This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); //GET Method routes tripList

// Get Method routes tripsFindByCode = requires parameter
router  
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);


module.exports = router;