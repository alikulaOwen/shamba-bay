//error handling class

class ErrorHandler extends Error{
    constructor(message, statusCodeError){
        super(message);
        this.statusCodeError = statusCodeError;
        
        Error.captureStackTrace(this, this.constructor)

    }
}

module.exports = ErrorHandler;