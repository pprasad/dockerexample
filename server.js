var express=require('express');
var http=require('http');
var app=new express();
app.set('port',process.env.PORT ||80);
app.get('/',function(req,res    ){
  res.send("Welcome To Node Js Applications");
})

http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server listening on port ' + app.get('port'));
});