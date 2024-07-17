const feedbackDatabase = require('../models/feedback')


exports.postfeedback = async (req,res)=>{
    const data = req.body;
    try{
        const newfeedback = new feedbackDatabase(data)
        await newfeedback.save() ;
        res.json({message:"success",data:newfeedback})
    }catch(error){
        res.status(500).json({message:error.message})
    }
} 


exports.getfeedbacks = async (req,res)=>{
    
    try{
 const alldata = await feedbackDatabase.find();
    
    if(alldata.length>0){
        res.json({length:alldata.length,data:alldata})
    }else{
        res.json({message:'Thanks for using our Api.,but here no data available please check later'});
    }
    } catch(error){
        res.json({message:'somthing went wrong'})
    }
} 


exports.Updatefeedbacks = async(req, res) =>{
    const data = req.body;
    const {feedbackId} = req.params.feedbackId;
    try {
      const Updatefeedbacks = await feedbackDatabase.findByIdAndUpdate(req.params.feedbackId, data, {new:true})
  
      if(Updatefeedbacks){
        res.json({message:'updated', data:Updatefeedbacks})
      }else{
        res.json({message:'Id not Found'})
      }
    } catch (error) {
      res.json({message:error.message})
    }
  }
  


  exports.deletefeedback = async(req, res) =>{
    const data = req.body;
    const {feedbackId} = req.params.feedbackId;
    const password = req.params.password;
    const username = req.params.username;
    try {
      if(username === "bhaskar" && password === "1234567890"){
        const deletefeedback = await feedbackDatabase.findByIdAndDelete(req.params.feedbackId, data, {new:true})
            if(deletefeedback){
              res.json({message:'ideleted successfully', dataDeleted:deletefeedback})
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


  

