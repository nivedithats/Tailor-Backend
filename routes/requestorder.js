const express = require('express');
const { UploadRequest, getRequest, deleteRequest, getSingleRequest } = require('../controllers/requestorder');



const routes = express.Router();


routes.post('/request/add',UploadRequest);
routes.get('/request/list',getRequest);
routes.put('/request/update/:requestId',UploadRequest);
routes.get('/request/:requestId',getSingleRequest);
routes.delete('/request/delete/:username/:password/:requestId',deleteRequest);



module.exports = routes;