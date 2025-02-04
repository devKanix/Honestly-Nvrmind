import { User } from "../models/index.js";
import CrudRepository from "./crud-repository.js";
import { ValidationError, AppError } from '../utils/errors/index.js';
import { StatusCodes } from "http-status-codes";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(filter) {
        try {
            const response = await User.findOne({email: filter});
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
                "Cannot Find User on filter",
                "There was an issue While finding the user on a filter method.",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
};

export default UserRepository;