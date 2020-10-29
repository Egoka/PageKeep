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
    }
}