const express = require('express');
const {  UploadUserDetails, getUser, getSingleUserDetails, UpdateUser, deleteUserDetails, LoginUser } = require('../controllers/user');
const routes = express.Router();

routes.post('/user/register', UploadUserDetails)
routes.post('/user/login', LoginUser)
routes.get('/users/list', getUser)
routes.get('/users/:userId', getSingleUserDetails)
routes.put('/users/update/:userId', UpdateUser)
routes.delete('/users/delete/:username/:password/:userId', deleteUserDetails)

module.exports = routes;