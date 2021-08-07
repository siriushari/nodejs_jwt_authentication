 //const jwt = require ('jsonwebtoken')
 const db = require('../routes/user')
//const jwt = require ('jsonwebtoken')


// const auth = async (req, res, next)=>{
//     try{
//         const token = req.header('Authorization').replace('Bearer ','')
//         console.log(token)

//         const decode = jwt.verify(token, 'mysecretkey')
//         console.log(decode)

//         let sql = 'select * from users where user_id = ?'
//         let query = db.query(sql,[decode.user_id],(err, result)=>{
//             if(!result){
//                 return next()
//             }else{
//                 req.user = result[0]
//                 console.log('next')
//                 console.log(req.user)
//                 next()
//             }
//         })

//     }catch(error){
//    res.status(401).send('please authenticate.')
//     }
// }

// const auth = (req, res, next)=>{
//     try{
//         const token = req.header('Authorization').replace('Bearer ','')
//         console.log(token)
//         const decoded = jwt.verify(token, 'mysecretkey')
//         res.send(decoded)
//     // let sql = 'select * from users where user_id=?'
//     // let query = db.query(sql,[decode.id],(err, results)=>{
//          db.start.query('SELECT * FROM users WHERE user_id = ?', [decoded.id], (error, result) => {
//         if(err){
//             return console.log(err)
//         }else{
//             console.log(results)
//         }
//     })
//     }catch(e){
//         return console.log(e)
//     }
// }


const jwt = require("jsonwebtoken");
//const { checktoken } = require('../../../nodejs-and-mysql-login/controller/auth');
 const checktoken = (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, 'mysecretkey', (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }




module.exports = checktoken