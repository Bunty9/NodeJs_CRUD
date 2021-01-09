const mongoose = require('mongoose');


const mongoConnect = async()=>{
const uri = process.env.MONGO_URI
mongoose.connect(uri,{
    dbName : 'test',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log('mongo connection successful')
}).catch((e)=>console.log(e.message))

mongoose.connection.on('error',(err)=>{
    console.log(err.message)
})
mongoose.connection.on('disconnected',()=>{
    console.log('Mongoose disconnected')
})

process.on('SIGINT',async()=>{
    await mongoose.connection.close()
    // process.exit(0)
})
}


module.exports = mongoConnect;