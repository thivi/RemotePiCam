var express=require('express');
var app=express();
var http=require('http').Server(app);
var path=require("path");

app.use(express.static(path.join(__dirname,'assets')));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client.html');
});

http.listen(3000,()=>{
    console.log("Server running");
})
