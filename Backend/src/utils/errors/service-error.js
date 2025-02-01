import { StatusCodes } from "http-status-codes";

class ServiceError extends Error {
    constructor(
        explanation = "Something went wrong in the service layer.", 
        message = "Something went wrong."
    ) {
        super()

        this.name = "ServiceError";
        this.message = message;
        this.explanation = explanation;
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    }
}

export default ServiceError;