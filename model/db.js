const mysql = require('mysql')


const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
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