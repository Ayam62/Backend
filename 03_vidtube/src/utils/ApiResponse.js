class ApiResponse{//error response and Api response are always in the class format
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data;
        this.message=message
        this.success=statusCode<400
    }
}