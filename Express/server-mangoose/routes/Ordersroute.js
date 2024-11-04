const express =require('express')
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