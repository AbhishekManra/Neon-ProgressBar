const express = require("express")
const bodyparser = require("body-parser");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var arr = [0 , 0 , 0 , 0];


app.post("/a",(req,res)=>{
    arr[0] = req.body.inpu1;
    res.redirect("/");
});
app.post("/b",(req,res)=>{
     arr[1] = req.body.inpu2;
     res.redirect("/");
});
app.post("/c",(req,res)=>{
     arr[2] = req.body.inpu3;
     res.redirect("/");
});
app.post("/d",(req,res)=>{
     arr[3] = req.body.inpu4;
     res.redirect("/");
});

app.get("/",(req,res)=>{
    res.render("index",{data1 : arr[0], data2 : arr[1], data3 : arr[2],data4 : arr[3]});
});

app.listen(3000,()=>{
    console.log("Server On");
})