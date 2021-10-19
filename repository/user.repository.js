const User = require("../models").users



class UserRepository {

    async createUser(params){

        let user = new User(params);
        return await user.save();
  
    }

    async findUserById(userId){
        let user = await User.findById(userId)
        return user;
    }

    async updateUserById(userId , params){
        let user = await User.findByIdAndUpdate(userId , params)
        console.log("Updated user" , user);
        return "User was successfull updated";
    }

}

module.exports = UserRepository;