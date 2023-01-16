import customapi from './custom-api.js'
import {StatusCodes} from 'http-status-codes'

class UnauthenticatedError extends customapi{
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.UNAUTHORIZED
    }
}

export default UnauthenticatedError