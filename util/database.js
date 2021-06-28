const Sequelize=require('sequelize');
const sequelize = new Sequelize('expense_tracker','root','Aditya@1999',{
    host:'localhost',
    dialect:'mysql'
})
 module.exports=sequelize;