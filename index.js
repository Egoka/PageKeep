const express = require('express')
const path = require('path')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphQL/schema')
const resolver = require('./graphQL/resolver')
const sequelize = require('./utils/dataBase')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use( graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
}))
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'public','index.html'))
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