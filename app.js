const express = require("express");
const bodyparser = require("body-parser");
const app = express();

var arr = [100 , 100 , 100 ,100];

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine' , 'ejs');

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index",{percentage1 : arr[0], percentage2 : arr[1] , percentage3 : arr[2] , percentage4 : arr[3]});
});

app.post("/",function(req,res){
    switch (req.body.btn1) {
        case '1':
            arr[0] = req.body.inp1;
            break;
        case '2':
            arr[1] = req.body.inp2;
            break;
        case '3':
            arr[2] = req.body.inp3;
            break;
        case '4':
            arr[3] = req.body.inp4;
            break;
    }
    res.redirect("/");
});


app.listen(3000,function(){
    console.log("Server started");
});