const{Router} = require('express')
const Todo = require('../models/modelBD')
const router = Router()
//Получение списка задач
router.get('/',(req,res)=>{})
//Создание новых записей
router.post('/',(req,res)=>{})
//Изменение задачи
router.put('/:id',(req,res)=>{})
//Удаление адачи
router.delete('/:id',(req,res)=>{})
module.exports = router