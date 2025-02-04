import { StatusCodes } from "http-status-codes";

class ValidationError extends Error{
    constructor(error){
        super(); 
        this.name = "ValidationError";
        this.message = "Not able to validate data sent in the request.";
        this.explanation = error.message;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
};

export default ValidationError;