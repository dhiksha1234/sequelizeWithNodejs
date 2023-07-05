const express = require('express');
const app = express();

const port =3000; 

const user= require('./Routes/users');
 
app.use('/user',user)

app.listen(port, () =>{
    console.log(`Running on port ${port}`);
})