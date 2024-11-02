// Routes
const { Router } = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../services/user.service');
const router = Router();

router.route('/').get(getAllUsers)
                 .post(createUser);

router.route('/:id').patch(updateUser)
                    .delete(deleteUser)
                    .get(getUserById);

module.exports = router 
