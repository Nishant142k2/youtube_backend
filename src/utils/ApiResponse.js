class ApiResponse {
    constructor(statusCode, message, data = "Success") {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode >= 200 && statusCode < 400; 
    }
}

export { ApiResponse };