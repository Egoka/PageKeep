const Todo = require('../models/modelBD')
const users =[
    {name:'Egor', age: 30, email: 'Egor@gmail.com'},
    {name:'Ivan', age: 36, email: 'Ivan@gmail.com'}
]
module.exports = {
    test(){
        return {
            count:Math.trunc(Math.random()*10),
            users
        }
    },
    random({min, max, count}) {
        const arr = []
        for (let i=0;i<count;i++)
            arr.push(Math.trunc(Math.random()*(max-min)+min))
        return arr
    },
    addTestUser({ user:{name, email}}){
        user = {name,email,age: Math.ceil(Math.random()*30)}
        users.push(user)
        return user
    },
    async getTodos(){
        try{
            return await Todo.findAll()
        }catch(err){
            throw new Error('Fetch todos is not available!!!')
        }
    }
}