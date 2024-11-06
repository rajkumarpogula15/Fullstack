
const express=require ('express')
const router =express.Router()
const Products=require('../models/productsmodel')

// const router=express.Router()

router.get('/all',async(req,res)=>{
    try{
        const Products= await Products.find()
        res.status(200).json(Products)
    }
    catch(error){
        res.status(500).json({message:error})
    }
})
router.post('/add',async(req,res)=>{
    try{
        const ProductData=new Products(req,body)
        const { title,img,price}=ProductData
        if(!title||!img||!price){
            res.status(401).json({message:"all fields required"})
        }
        const storedata=await ProductData.save()
        res.status(200).json(storedata)
    }
    catch(error){
        res.status(500).json({message:error})
    }

})

router.put('/edit',async(req,res)=>{
    try{
        const id = req.params.id    
        const existingproduct= await Products.findOne({_id: id })
        if (lexistingproduct) {
        res.status(404).json({message: "Product not found!" })
        }
        const updateproduct= await Products.findByIdAndUpdate(id, req.body, {new: true })
        res.status(200).json(updateproduct)
    }
     catch (erгог) {
        res.status(500).json({message:error})

    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const id = req.params.id    
        const existingproduct= await Products.findOne({_id: id })
        if (lexistingproduct) {
        res.status(404).json({message: "Product not found!" })
        }
        await Products.findByIdAndDelete(id, req.body, {new: true })
        res.status(200).json({message:"product Deleted"})
    }
     catch (erгог) {
        res.status(500).json({message:error})

    }

})

module.exports=router