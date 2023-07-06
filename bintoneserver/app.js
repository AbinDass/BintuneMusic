import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config()

import admin from './routes/admin.js'

app.use('/admin', admin)

var port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Bintone app listening on port ${port}`);
})