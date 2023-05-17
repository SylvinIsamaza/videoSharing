const express=require('express')
const connect = require('./db/connection')
const userRoute= require('./routes/user')
const commentsRoutes=require('./routes/comments')
const videoRoutes= require('./routes/videos')
const authRoutes=require('./routes/auth')
const app=express()
const cors=require('cors')
const cookieParser=require('cookie-parser')


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173'
}))


app.use('/api/user',userRoute)
app.use('/api/comment',commentsRoutes)
app.use('/api/videos',videoRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const status=err.status||500
    const message=err.message||'Something went wrong'
    console.log(err)
    res.status(status).send({error:message})
})
app.get('/',(req,res)=>{
    
       req.header={ 'Content-Type': 'text/plain'},
       req.header={ 'Access-Control-Allow-Origin' : '*'},
       req.header={ 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'},
         res.json("user found")

})
app.listen(8800,()=>{
    connect()
    console.log('app is listening on http://localhost:8800')
})