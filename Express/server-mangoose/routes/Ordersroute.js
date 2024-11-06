const express =require('express')
const router =express.Router()
const Orders=require('../models/Usersmodel')

router.get('/all',async(req,res)=>{

    try{
        const Orders= await Orders.find()
        res.status(200).json(Orders)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})
router.post('/add',async(req,res)=>{
    try{
        const OrderData=new Orders(req,body)
        const { title,img,price}=OrderData
        if(!title||!img||!price){
            res.status(401).json({message:"all fields required"})
        }
        const storedata=await OrderData.save()
        res.status(200).json(storedata)
    }
    catch(error){
        res.status(500).json({message:error})
    }

})

module.exports=router