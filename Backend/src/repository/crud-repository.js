import { StatusCodes } from "http-status-codes";
import { AppError, ValidationError } from "../utils/errors/index.js";

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            if(error.name == "ValidationError") {
                throw new ValidationError(error);
            }
            if(error.name == "CastError") {
                throw new AppError(
                    "ClientError",
                    "Made an Invalid Request.",
                    error.message,
                    StatusCodes.BAD_REQUEST
                );
            }
            throw new AppError(
                "RepositoryError",
                "Create Malfunction",
                "There was an issue while creation inside Crud Repository.",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async delete(id) {
        try {
            await this.model.findByIdAndDelete(id);
            return true;
        } catch (error) {
            if(error.name == "ValidationError") {
                throw new ValidationError(error);
            }
            if(error.name == "CastError") {
                throw new AppError(
                    "ClientError",
                    "Made an Invalid Request.",
                    error.message,
                    StatusCodes.BAD_REQUEST
                );
            }
            throw new AppError(
                "RepositoryError",
                "Delete Malfunctions",
                "There was an issue while deleting inside Crud Repository.",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, {new: true});
            return response;
        } catch (error) {
            if(error.name == "ValidationError") {
                throw new ValidationError(error);
            }
            if(error.name == "CastError") {
                throw new AppError(
                    "ClientError",
                    "Made an Invalid Request.",
                    error.message,
                    StatusCodes.BAD_REQUEST
                );
            }
            throw new AppError(
                "RepositoryError",
                "Update Malfunction",
                "There was an issue while updating inside Crud Repository.",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
            /*exec() will return a promise otherwise the normal mongoose query returns a thenable. */
        } catch (error) {
            if(error.name == "ValidationError") {
                throw new ValidationError(error);
            }
            if(error.name == "CastError") {
                throw new AppError(
                    "ClientError",
                    "Made an Invalid Request.",
                    error.message,
                    StatusCodes.BAD_REQUEST
                );
            }
            throw new AppError(
                "RepositoryError",
                "get Malfunction",
                "There was an issue while getting inside Crud Repository.",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getAll() {
        try {
            const response = await this.model.find({});
            return response;
            /*exec() will return a promise otherwise the normal mongoose query returns a thenable. */
        } catch (error) {
            if(error.name == "ValidationError") {
                throw new ValidationError(error);
            }
            if(error.name == "CastError") {
                throw new AppError(
                    "ClientError",
                    "Made an Invalid Request.",
                    error.message,
                    StatusCodes.BAD_REQUEST
                );
            }
            throw new AppError(
                "RepositoryError",
                "getAll Malfunction",
                "There was an issue while getting all inside Crud Repository.",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
};

export default CrudRepository;