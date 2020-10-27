const express = require('express')
const path = require('path')
const sequelize = require('./utils/dataBase')
const todoRoutes =require('./routes/todo')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api/todo',todoRoutes)
app.use((req,res,next)=>{
    res.sendFile('./public/index.html')
})
async function start(){
    try{
        await sequelize.sync({force:true})
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }catch (err){
        console.log(err)
    }
}
start()