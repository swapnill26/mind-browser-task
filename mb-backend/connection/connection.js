const Sequelize=require('sequelize');
const db={}

const sequelize=new Sequelize('mb',"root","",{
    host:"localhost",
    dialect:'mysql',
    operatorsAliases:false,
    define: {
        timestamps: false
    },
    // pool:{
    //     max:5,
    //     mon:0,
    //     acquire:30000,
    //     idle:10000
    // }
});

db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports=db;