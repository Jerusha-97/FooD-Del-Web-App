const {format}=require('date-fns')
const {v4:uuid}=require('uuid')
const fs= require('fs')
const fspromise=require('fs').promises
const path=require('path')

const logevents =async (message,logname)=> {
    const datetime=`${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logItem=`${datetime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs')))
        {
            await fspromise.mkdir(path.join(__dirname,'..','logs'))
        }
        await fspromise.appendFile(path.join(__dirname,'..','logs',logname),logItem)
        }catch (err) {
        console.error(err);
    }
    }    
    
    const logger=((req,res,next)=>{
        logevents(`${req.method}\t${req.headers.origin}\t${req.url}`,"eventfiles.txt")
    console.log(`${req.method} ${req.path}`)
    next()
    })
module.exports={logger,logevents}



