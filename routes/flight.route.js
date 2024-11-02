//input - {destination, status}
//output - list of flights

// Routes
const { Router } = require('express');
const { getAllFlights } = require('../services/flight.service');
const router = Router();

router.route('/').get(getAllFlights)
//                  .post(createUser);

// router.route('/:id').patch(updateUser)
//                     .delete(deleteUser)
//                     .get(getUserById);

module.exports = router
