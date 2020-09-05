const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');



const app = express();

require('dotenv/config')

// const DB = 'mongodb+srv://denis:0740756210@trial1.vdcgr.mongodb.net/practice?retryWrites=true&w=majority

app.use(bodyparser.json());

//import routes
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');

//middlewares
app.use('/posts',postRoute);

//routes
app.get('/',(req,res)=>{
    res.send('connected')
})



//connect to db
mongoose.connect('process.env.DB',{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('we are connected to the database')
})


port = 4001;
app.listen(port,()=>{
    console.log(`listening on port${port}`)
})