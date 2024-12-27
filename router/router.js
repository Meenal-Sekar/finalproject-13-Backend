const express=require('express')
const router=express.Router();

const signUpTemplateCopy=require('../model/SignupModel') //collections added


router.post("/signup",(request,response)=>
    {
        const sam=new signUpTemplateCopy({
    
            name:request.body.name, //fullname(front end form name=fullName)
            email:request.body.email,
            contact:request.body.contact,
            age:request.body.age,
            jobRole:request.body.jobRole
        })
        sam.save().then(data=>
            {
                response.json(data);
                console.log('Data added successfully');
            }).catch(error=>
                {
    
                    response.json(error)
                })

    })
//get put delete

module.exports=router;
