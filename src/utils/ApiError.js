class ApiError extends Error {

    constructor(
        statusCode ,
        message ="Something went wrong",
        stack ="",
        errors=[]

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.messsage = message
        this.success = false
        this.errrors = errors

        if (stack){
            this.stack=stack

        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}