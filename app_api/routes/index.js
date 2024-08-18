const express = require('express'); //express app
const router = express.Router(); //Router logic

//This is where we import the controllers we will route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');


// define route for registration endpoint
router 
    .route('/register')
    .post(authController.register);


//define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) //GET Method routes tripList
    .post(tripsController.tripsAddTrip); //POST Method Adds a Trip
// Get Method routes tripsFindByCode = requires parameter
router  
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);


module.exports = router;