const express = require('express')
const app = express()
// app.get('/',function(req,res){
//     res.sendFile('/home.html');

// });
// app.get('/contact',function(req,res){
//     res.sendFile('/public/contact.html');

// });
// app.get('/ourservices',function(req,res){
//     res.sendFile('/public/ourservices.html/');

// });


app.use(date= (req,res,next)=> {
    const start = new Date()
    const hours = start.getHours()
    if((hours<18)&&(hours>7)) {
        app.use(express.static(__dirname+'/public')) 
    }else res.send('Msaker')
  
    next()
})


app.listen(3000,(err)=>{
    if(err) console.log(err)
   
    else console.log('server connected')  

})