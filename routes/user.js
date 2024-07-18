const express = require('express');
const {  UploadUserDetails, getUser, getSingleUserDetails, UpdateUser, deleteUserDetails } = require('../controllers/user');
const routes = express.Router();

routes.post('/users/add', UploadUserDetails)
routes.get('/users/list', getUser)
routes.get('/users/:userId', getSingleUserDetails)
routes.put('/users/update/:userId', UpdateUser)
routes.delete('/users/delete/:username/:password/:userId', deleteUserDetails)

module.exports = routes;