const User = require("../models").users



class UserRepository {

    async createUser(params){

        let user = new User(params);
        return await user.save(params);
  
    }

    async findUserById(userId){
        return await User.findById(userId)
  
    }

    async updateUserById(userId , params){
        let user = await User.findByIdAndUpdate(userId , params)
        console.log("Updated user" , user);
        return "User was successfull updated";
    }

    async deleteUserById(userId){
        await User.findByIdAndRemove(userId)
        return "Successfully deleted user";
    }

}

module.exports = UserRepository;