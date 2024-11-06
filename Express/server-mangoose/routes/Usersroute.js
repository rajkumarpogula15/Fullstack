const express =require('express')
const Users=require('../models/Usersmodel')

router.get('/all',async(req,res)=>{

    try{
        const Users= await Users.find()
        res.status(200).json(Users)
    }
    catch(error){
        res.status(500).json({message:error})
    }

})
router.post('/add',async(req,res)=>{
    try{
        const UserData=new Users(req,body)
        const { title,img,price}=UserData
        if(!title||!img||!price){
            res.status(401).json({message:"all fields required"})
        }
        const storedata=await UserData.save()
        res.status(200).json(storedata)
    }
    catch(error){
        res.status(500).json({message:error})
    }

})
module.exports=router