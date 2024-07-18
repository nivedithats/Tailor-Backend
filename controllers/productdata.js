const productsDatabase = require('../models/productdata');

exports.uploadProducts = async (req, res) => {
    const data = req.body;
    try {
       const newProduct = new productsDatabase(data)
       await newProduct.save();
       res.json({message:"successs", data:newProduct}) 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getProducts = async(req, res) => {
    const data = req.body;
    try {
        const allData = await productsDatabase.find();
        if (allData.length>0) {
            res.json({length:allData.length, data:allData})
        }else{
            res.json({message:'Thanks for using our Api., but here no data available please check later'});
        }
    } catch (error) {
        res.json({message:'something went wrong'})
    }
}

exports.getSingleProduct = async(req, res) =>{
    const {productID} = req.params.productID;
    try {
        const data = await productsDatabase.findById(req.params.productID)
        if (data) {
            res.json({message:'done!', data:data})
        } else {
            res.json({message:'product id is not found'})
        }
    } catch (error) {
        res.json({message:error.message})
    }
}

exports.updateProduct = async(req, res) =>{
    const data = req.body;
    const productID = req.params.productID;
    try {
        const updateProduct = await productsDatabase.findByIdAndUpdate(req.params.productID, data, {new:true})
        if (updateProduct) {
            res.json({message:'update', data:updateProduct})
        } else {
          res.json({message:'Id not Found'})  
        }
    } catch (error) {
        res.json({message:error.message})
    }
}

exports.deleteproduct = async(req, res) =>{
    const {productId} = req.params.productId;
    const productname = req.params.productname;
    const price = req.params.price  
try {
    if (productname === "anarkali" && price === "700") {
        const deleteproduct = await productsDatabase.findByIdAndDelete(req.params.productId) 
        if (deleteproduct) {
            res.json({message:'deleted successfully', dataDeleted:deleteproduct})   
        } else {
            res.json({error:'Id is not found'})
        }
    } else{
        res.json({error:'invalid credentials'})
    }
} catch (error) {
    res.json({message:error.message})
}
}
