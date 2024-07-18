const express =  require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');
const connectDatabase = require('./config/db');
const feedbackRoutes = require('./routes/feedback')
const requestRoutes = require('./routes/requestorder');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/productdata');

const app = express();
connectDatabase(); //connect mongodb



app.use(cors());
 app.use(bodyParser.json()); 
 
 app.use('/api',productRoutes);



app.listen(4005, ()=>{
    console.log('server is running at localhost:4005');
})
