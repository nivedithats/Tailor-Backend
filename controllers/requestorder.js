const RequestDatabase = require('../models/requestorder')


exports.UploadRequest = async (req,res)=>{
    const data = req.body;
    try{
        const newRequest = new RequestDatabase(data)
        await newRequest.save() ;
        res.json({message:"success",data:newRequest})
    }catch(error){
        res.status(500).json({message:error.message})
    }
} 


exports.getRequest = async (req,res)=>{
    
    try{
 const alldata = await RequestDatabase.find();
    
    if(alldata.length>0){
        res.json({length:alldata.length,data:alldata})
    }else{
        res.json({message:'Thanks for using our Api.,but here no data available please check later'});
    }
    } catch(error){
        res.json({message:'somthing went wrong'})
    }
} 


exports.UpdateRequest = async(req, res) =>{
    const data = req.body;
    const {requestId} = req.params.requestId;
    try {
      const UpdateRequest = await RequestDatabase.findByIdAndUpdate(req.params.requestId, data, {new:true})
  
      if(UpdateRequest){
        res.json({message:'updated', data:UpdateRequest})
      }else{
        res.json({message:'Id not Found'})
      }
    } catch (error) {
      res.json({message:error.message})
    }
  }
  


  exports.deleteRequest = async(req, res) =>{
    const data = req.body;
    const {requestId} = req.params.requestId;
    const password = req.params.password;
    const username = req.params.username;
    try {
      if(username === "Aras" && password === "192001"){
        const deleteRequest = await RequestDatabase.findByIdAndDelete(req.params.requestId, data, {new:true})
            if(deleteRequest){
              res.json({message:'ideleted successfully', dataDeleted:deleteRequest})
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


  exports.getSingleRequest = async(req, res) =>{
    const {requestId} = req.params.requestId;
    try {
        const data = await RequestDatabase.findOne({requestId})
        if(data){
          res.json({message:'done!', data:data})
        }else{
          res.json({message:'user Id is not found'})
        }
    } catch (error) {
        res.json({message:error.message})
    }
  }

  

