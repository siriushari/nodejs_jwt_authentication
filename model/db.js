const mysql = require('mysql')


const db = mysql.createConnection({
    host : 'ec2-18-191-119-210.us-east-2.compute.amazonaws.com',
    user : 'root',
    password : 'M@gili!nfotech',
    database : 'loginandregister'
})

db.connect((err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log('MySQL Connected')
    }
})

module.exports = db