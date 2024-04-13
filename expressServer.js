//express is a 3rd party module so we need to install 
const express = require('express');

const app = express();
app.all('*',(req, res)=>{
    res.send('<h1>this is the home page</h1>')
});

app.listen(3000)
console.log("the server is listening on port 3000...")
