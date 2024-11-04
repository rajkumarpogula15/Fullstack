const mongoose=require('mongoose')
const OrderdsSchema =new mongoose.Schema({
    userid:{
        type: String,
        required: true,
      

    },
    productid: {
        type: String,
        required: true
        
        
    },
    orderprice:{
        type: Number,
        required: true
        
    },
    date:{
        type:String,
        required:true

    },
    useraddress:{
        type: String,
    },

})

const orders =mongoose.model("orders",ordersSchema)

module.exports= mongoose
