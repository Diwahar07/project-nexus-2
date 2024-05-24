import express from   'express';
import {db} from './db.js';

import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';

const app= express();
const port=4444;

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

db.query("select 1",(err,result)=>{
    if(!err) 
    {
     console.log("DB is conected succesfully");
     app.listen(port,()=>{
         console.log(`app is runing port ${port}`);
     })
 
    }
 
    else throw err;
 })