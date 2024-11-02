class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errorCode='',
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errorCode = (errorCode == '') ? statusCode : errorCode;
        this.errors = errors;
        if(stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}


module.exports = { ApiError };
