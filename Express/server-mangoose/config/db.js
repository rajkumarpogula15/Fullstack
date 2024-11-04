const mongoose=require('mongoose')

mongoose=mongoose.connect("mongodb+srv://rajkumarpogula22:Raju@1454@in-aws.59ion.mongodb.net/")

const connection=mongoose.connection;

connection.on('connected',()=>{
    console.log("DB Connected ")
})

connection.on('error',()=>{
    console.log("DB  Error")
})

module.exports =mongoose