const express = require('express');

const { postfeedback, getfeedbacks,deletefeedback, Updatefeedbacks } = require('../controllers/Feedback');

const routes = express.Router();


routes.post('/feedback/add',postfeedback);
routes.get('/feedback/list',getfeedbacks);
routes.put('/feedback/update/:feedbackId',Updatefeedbacks);

routes.delete('/feedback/delete/:username/:password/:feedbackId',deletefeedback);


module.exports = routes;