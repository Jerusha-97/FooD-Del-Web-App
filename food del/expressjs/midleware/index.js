const express=require('express');
const app= express();
const path=require('path')
const PORT=process.env.PORT || 3000;

app.use('/employees',require('./router/api/employees'))
// const cors=require('cors')
// const logevents=require('./log_reports/logevents');
// const {logger}=require('./log_reports/logevents')
// const errorhandler=require('./log_reports/errrorhandler')
// const router=require('./router/subdir')

// app.use('/subdir', require('./router/subdir'))
// app.use('/', require('./router/root'))
// app.use(logger)

 //cross origin sharing 
//  const whitelist=['http://www.google.com','http://127.0.0.1:5500/', 'http://localhost:3000']
//  const corsOption={
//     origin:(origin,callback)=>{
//         if(whitelist.indexOf(origin)!==-1 ||!origin){
//             callback(null,true)
//         }else{
//             callback(newError('not allowed by cors'));
//         }
//     },
//     optionsSucessStatus:200
//  }


// app.use((req,res,next)=>{
//     logevents(`${req.method}\t${req.headers.origin}\t${req.url}`)
//     console.log(`${req.method} ${req.path}`)
//     next()
// })

// app.use(cors(corsOption))

// app.use(express.urlencoded({encoded:false}));
// app.use('/',express.static(path.join(__dirname,'/public')));
// app.use('./subdir',express.static(path.join(__dirname,'/public')));



// app.get('^/$|/index(.html)?',(req,res) =>{
//     res.sendFile(path.join(__dirname,'views','index.html'));

// })
// app.get('/new(.html)?',(req,res) =>{
//     res.sendFile(path.join(__dirname,'views','new-page.html'));

// })
// app.get('/*',(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,'views','404.html'))
// })


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
}) 

// app.use(errorhandler)