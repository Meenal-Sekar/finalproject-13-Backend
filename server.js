const express=require('express');
const app=express();
const mongoose=require('mongoose')
const cors=require('cors');
app.use(express.json());//middleware
app.use(cors())

const routerurl=require('./router/router') //db+router

app.use('/app',routerurl);

if(mongoose.connect('mongodb+srv://meenal-sekar:VishuVishu1805@cluster0.vskqmqg.mongodb.net/final13?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log('database connected')
    }



app.listen(4000,()=>
{
    console.log('server is up and run');
})


//https://localhost:4000/app/signup