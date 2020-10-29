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
    }
}