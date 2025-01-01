class ApiError extends Error {//extends Error is bultin class for error in JS as it is very common
    constructor(
        statusCode,
        message="Something went Wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null,
        this.message=message,
        this.success=false,
        this.errors=errors

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError} 