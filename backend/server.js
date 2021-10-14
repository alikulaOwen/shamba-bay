 const app = require('./app')
 const connectDB = require('./config/db')
 const dotenv = require('dotenv');


//setting up config file
 dotenv.config({path: 'backend/config/config.env'});

 //connect to db
 connectDB();


 app.listen(process.env.PORT, () =>{
     console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
 });

