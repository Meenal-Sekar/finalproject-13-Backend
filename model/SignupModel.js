const mongoose=require('mongoose')
const signUpTemplate=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        contact:
        {
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        jobRole:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    })
    
module.exports=mongoose.model('sampleTable',signUpTemplate)