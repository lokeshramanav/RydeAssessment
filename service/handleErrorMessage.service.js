exports.generateMeaningFullErrorMessage = error => {
    let message = "";

    if (error.code) {
        switch (error.code) {
            case 11000:
            case 11001:
                message = `User with this credentials already exists`;
                break;
            default:
                message = error.message;
        }
    } else {
       
       if(error.message = "user validation failed: name: Path `name` is required."){
            message = "Required name parameter missing for the user"
       }else{   
        message = error.message;
       }
    }

    return message;
};