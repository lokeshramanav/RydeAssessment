const UserRepository = require("../repository/user.repository")
var userRepository = new UserRepository()
const { generateSuccessResponse , generateFaliureResponse}  = require("../service/apiResponse.service")
const {generateMeaningFullErrorMessage} = require("../service/handleErrorMessage.service")

exports.createUser = async(req, res)=>{
    try{
        let user = await userRepository.createUser(req.body);
        res.status(200).send(generateSuccessResponse(user))

    }catch(error){
        console.log("Error" , error.message);
        res.status(400).send(generateFaliureResponse(generateMeaningFullErrorMessage(error)))
    }
}

exports.findById = async(req,res)=>{
    try{
        let user = await userRepository.findUserById(req.params.id);
        res.status(200).send(generateSuccessResponse(user));

    }catch(error){
        console.log("Error" , error.message);
        res.status(400).send(generateFaliureResponse(generateMeaningFullErrorMessage(error)))
    }
}

exports.updateUser = async(req, res)=>{
    try{
        let user = await userRepository.updateUserById(req.params.id , req.body);
        res.status(200).send(generateSuccessResponse(user));
    }
    catch(error){
    console.log("Error" , error.message);
    res.status(400).send(generateFaliureResponse(generateMeaningFullErrorMessage(error)))
    }
}