import customapi from './custom-api.js'
import {StatusCodes} from 'http-status-codes'

class BadrequestError extends customapi{
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.BAD_REQUEST
    }
}

export default BadrequestError