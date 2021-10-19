module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
            name:{
                type:String,
                required:true,
                unique:true
            },
            dob:{
                type: String
            },
            address:{
                type:String
            },
            description:{
                type:String
            },
            createdAt:{
                type:Date,
                default:Date.now
            },
        },
        { timestamps: true }
      )
    );
  
    return User;
  };