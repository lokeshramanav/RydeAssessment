const User = require("../models").users



class UserRepository {

    async createUser(params){
        console.log("params" , params)
        var user = new User(params);
        return await user.save();
  
    }

}

module.exports = UserRepository;