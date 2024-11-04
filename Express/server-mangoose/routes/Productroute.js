
const express=require ('express')
const Products=require('../models/productsmodel')

const router=express.Router()

router.get('/all',async(req,res)=>{
    try{
        const Products= await Products.find()
        res.status(200).json(Products)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})