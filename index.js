const express =  require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/db');
// const feedbackRoutes = require('./routes/feedback')
const requestRoutes = require('./routes/requestorder')

const app = express();
connectDatabase(); //connect mongodb



app.use(cors());
 app.use(bodyParser.json()); 
 
 app.use('/api', requestRoutes)



app.listen(4001, ()=>{
    console.log('server is running at localhost:4001');
})
