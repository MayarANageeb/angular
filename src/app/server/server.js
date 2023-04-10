const express =require('express');
const bodyparser=require('body-parser');
const cors=require('cors'); 
const PORT=3000;
const username="mayar"
const app=express();
app.use(bodyparser.json());
app.use(cors());
app.get('/',function(req,res)
{
    res.send("welcome "+username)
})
app.listen(PORT,function()
{
    console.log("server listen in port"+PORT);
})
// app.post('/enroll',function(req,res){
//     console.log(req.body);
//     //calling mongo db
//     res.status(200).send({"data":"Recived successfully"});
// })