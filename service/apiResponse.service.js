module.exports.generateSuccessResponse = (data)=>{
    return {
        statusCode:200 , 
        data:data
    }
}

module.exports.generateFaliureResponse = (errorMessage)=>{
    return {
        statusCode:400 , 
        message:errorMessage
    }

}

