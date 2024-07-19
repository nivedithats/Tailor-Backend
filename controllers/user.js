const UserDatabase = require("../models/user");


exports.UploadUserDetails = async(req, res)=>{
    const data = req.body;
    try {
      const newUser =  new UserDatabase(data)
      await newUser.save();
      res.json({message:"success", data:newUser})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getUser  = async(req, res)=>{
  const data = req.body;
  try {
    const allData =  await UserDatabase.find(); 
   if(allData.length>0){
      res.json({length:allData.length, data:allData})
   }else{
      res.json({message:'Thanks for using our API, but here no data available please check later'})
   }
  } catch (error) {
      res.status(500).json({message:error.message})
  }
}


exports.getSingleUserDetails = async(req, res) =>{
  const {userId} = req.params.userId;
  try {
      const data = await UserDatabase.findById(req.params.userId)
      if(data){
        res.json({message:'done!', data:data})
      }else{
        res.json({message:'user Id is not found'})
      }
  } catch (error) {
      res.json({message:error.message})
  }
}


exports.UpdateUser = async(req, res) =>{
  const data = req.body;
  const {userId} = req.params.userId;
  try {
    const UpdateUser = await UserDatabase.findByIdAndUpdate(req.params.userId, data, {new:true})
    if(UserDatabase){
      res.json({message:'updated', data:UpdateUser})
    }else{
      res.json({message:'Id not Found'})
    }
  } catch (error) {
    res.json({message:error.message})
  }
}


exports.deleteUserDetails = async(req, res) =>{
  const data = req.body;
  const {userId} = req.params.userId;
  const password = req.params.password;
  const username = req.params.username;
  try {
    if(username === "rachana" && password === "1234567890"){
      const deleteUserDetails = await UserDatabase.findByIdAndDelete(req.params.userId)
          if(deleteUserDetails){
            res.json({message:'isdeleted successfully', dataDeleted:deleteUserDetails})
          }else{
            res.json({error:'Id is not found'})
          }
    }else{
      res.json({error:'invalid credentials'})
    }
  } catch (error) {
    res.json({message:error.message})
  }
}

exports.LoginUser = async (req, res) =>{
  const {email, password} = req.body;
  try {
      const checkUser =await UserDatabase.findOne({email})
      console.log(checkUser);
      if(!checkUser){
        res.status(400).json({message:'user is not found'})
      }
      if(req.body.password != checkUser.password){
        res.status(400).json({message:'password invalid'})
      }

      res.status(200).json({message:'success'})
  } catch (error) {
      res.status(500).json({message:"internal server error"})
  }
}