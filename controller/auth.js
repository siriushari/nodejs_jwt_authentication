const express = require ('express')
const db = require ('../model/db')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const bodyparser = require ('body-parser')

exports.new = (req, res)=>{
    res.send({
        status : 'success',
        message : 'inside controller'
    })
}


exports.listusers = (req, res)=>{
    let sql = 'select * from users'
    let query = db.query(sql,(err, results)=>{
        if(err){
            return console.log(err)
        }else{
            res.send({
                status : 'success',
                message : 'fetching users',
                results
            })
        }
    })
}

// exports.login= async(req, res)=>{
//     const { user_email , user_password } = req.body
// if(!user_email || !user_password){
//     return res.status(401).send('please provide an email and password')
// }
//  let sql = 'select * from users where user_email=?'
//  let query = db.query(sql,[user_email,user_password],async(err,result)=>{
    
//     console.log(result)
//      const isMatch =  await bcrypt.compare(user_password,result[0].password)
//      console.log(isMatch)
//      if( !email || !isMatch){
//          return res.status(401).send('Email and passwords are incorrect')
//       }else
//       {
//     //const generateAuthToken= async (req, res)=>{
//          let id = result[0].user_id
//          console.log(id)
//         let token = await jwt.sign ({id},'mysecretkey')
//         console.log(token)
//         res.status(201).send({token}) 
//          }
        
//      })
    
//  }


// exports.login = async(req, res)=>{
//     const {user_email, user_password} = req.body
//     if(!user_email ||!user_password){
//         return res.status(400).json({
//             status : 'failure',
//             message : 'please provide an email and password.'
//         })
//     }
//     let sql = 'select * from users where user_email=?'
//     let query = db.query(sql,[user_email], async(err, result)=>{
//         if(err){
//             return console.log(err)
//         }else{
//   console.log(user_password)
//   console.log(result)
//   const isMatch = await bcrypt.compare(user_password, result[0].user_password)
//   console.log(isMatch)
//   if(!user_email || !isMatch){
//       return res.status(400).send({
//           status : 'failure',
//           message : 'Email and passwords do not match.'
//       })
//   }
//     let id = result[0].user_id
//     console.log(id)
//     const token = await jwt.sign({id},'mysecretkey',{
//         expiresIn : '7 days'
//     })
//     res.status(200).send({
//         status : 'success',
//         message : 'Token Generated.',
//         Token : token
//     })
//   })
// }  


exports.login = (req, res)=>{
    const{user_email, user_password} = req.body
    if(!user_email ||!user_password){
        return res.status(400).json({
            status : 'failure',
            message : 'please provide an email and password.'
        })
    }
    let sql = 'select * from users where user_email=?'
    let query = db.query(sql,[user_email], async(err, result)=>{
     if(err){
         return console.log(err)
     }else{
         console.log(result)
       const isMatch = await bcrypt.compare(user_password, result[0].user_password)
  console.log(isMatch)
  if(!user_email || !isMatch){
      return res.status(400).send({
          status : 'failure',
          message : 'Email and passwords do not match.'
      })
  }
     let id = result[0].user_id
    console.log(id)
    const token = await jwt.sign({id},'mysecretkey',{
        expiresIn : '7 days'
    })
    res.status(200).send({
        status : 'success',
        message : 'Token Generated.',
        Token : token
    })
        }
    
    })

}