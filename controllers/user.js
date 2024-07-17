const UserDatabase = require('../models/user');

exports.registerUser =  async (req,res)=>{
    const {username,email,password,phonenumber} = req.body;
    try{
        let checkuser = await UserDatabase.findOne({email})
        if(checkuser){
            return res.status(400).json({message:'User already exist.'})
        }
       const  newUser = new UserDatabase({
            username,
            email,
            password,
            phonenumber
        })
        await newUser.save();
        res.status(2000).json({messege:'required successfully',data:newUser})
    }catch(error){
         res.status(500).json({messege:'Smothing went wrong , plese try later',data:error})
    }
}