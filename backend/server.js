const app = require("./app");
const connectDB = require("./config/db");
const dotenv = require("dotenv");


// uncaught exceptions
process.on('uncaughtException', err =>{
    console.log(`Uncaught exception: ${err.message}`);
    console.log('Server shitting Down')
    process.exit(1)
})


//setting up config file
dotenv.config({ path: "backend/config/config.env" });

//connect to db
connectDB();


const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

///handle unhandled promise rejection
process.on('unhandledRejection', err => {
    console.log(`Unhandled Exceptions: ${err.stack}`);
    console.log('Server shutting down, Cause: Unhandled Rejections');
    server.close(() => {
        process.exit(1);
    })
})
