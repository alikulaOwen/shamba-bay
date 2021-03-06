const ErrorHandler = require('../utils/errorHandlers');


module.exports = (err, req, res, next)=> {

    err.statusCode = ErrorHandler.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT'){
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errorMessage: err.message,
            stack: err.stack
        });

    if (process.env.NODE_ENV === 'PRODUCTION'){
        let error = [...err];

            // mongoose object id error
        if (err.name == 'CastError'){
            const message = `Resource Not Found, Invalid ${err.path}`
            error = new ErrorHandler(message, 400);
        }
            ///mongoose validation error
        if(err.name == 'ValidationError'){
            const message = Object.values(err.error).map(value => value.message);
            error = new ErrorHandler(message, 400);
        }

        // handling duplicate keys error 11000

        if (err.code === 11000){
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
            error = new ErrorHandler(message, 400);
        } 
     ///mongoose validation error
        if(err.name == 'JsonWebTokenError'){
            const message = 'JWT is invalid, try again';
            error = new ErrorHandler(message, 400);
        }
        if(err.name == 'TokenExpiredError'){
                const message = 'JWT is expired,';
                error = new ErrorHandler(message, 400);
        }
        error.message = err.message;
        res.status(error.statusCode).json({
            success: false,
            message: err.message || '504 Internal server Error'            

        })
    }
    }
}