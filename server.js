const express = require("express")

const app = express()


const port = 5000

const Time =(req,res,next)=>{
    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentHours = currentDate.getHours()

    if(currentDay== 6 ||currentDay== 0 || currentHours<9 || currentHours>17 ){
        return res.send('error')
    }
    next()
}
app.use(Time)


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Public/Homepage.html")
})
app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+"/Public/OurServices.html")
})
app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+"/Public/Contactus.html")
})

app.get('/Style.css',(req,res)=>{
    res.sendFile(__dirname+"/Public/Style.css")
})





app.listen(port,console.log(`server is running on the port ${port}`))