const mongoose=require('mongoose')
const UsersSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true


    },
    email: {
        type: String,
        required: true,
        unique: true
        
    },
    phone:{
        type: Number,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    address:{
        type: String,
    },

})

const Users =mongoose.model("User",UsersSchema)

module.exports= mongoose

