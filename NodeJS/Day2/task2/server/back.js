const http=require("http");
const fs=require("fs");
let mainHtml = "";
fs.readFile("../client/pages/main.html",(err, data) => {
  err ? console.log(err) : (mainHtml = data.toString());
 // console.log(mainHtml);
});
let maincss="";
fs.readFile("../client/style/main.css",(err, data) => {
  err ? console.log(err) : (maincss = data.toString());
  //console.log(maincss);
});
let welcomPage="";
fs.readFile("../client/pages/welcom.html",(err, data) => {
  err ? console.log(err) : (welcomPage = data.toString());
  //console.log(maincss);
});

http.createServer((req,res)=>{
 let url=req.url;
if(req.method=="GET"){
 switch(url){
    case "/":
    case "/main.html":
        res.setHeader("content-type", "text/html");
        res.write(mainHtml);
        break;
    case "/style/main.css":
        res.setHeader("content-type","text/css");
        res.write(maincss);
        break;
 }
 res.end();
}
else if(req.method=="POST"){
    req.on("data",(data)=>{

 const parameters=new URLSearchParams(data.toString());
 let json = {};
for (let [key, value] of parameters.entries()) {
  json[key] = value;
}
       // console.log(url);
     console.log(parameters)
     console.log()
       welcomPage= welcomPage.replace("{clientName}",parameters.get("username"));
       welcomPage=welcomPage.replace("{mobileNumber}",parameters.get("number"));
       welcomPage=welcomPage.replace("{email}",parameters.get("email"));
       welcomPage=welcomPage.replace("{address}",parameters.get("address"));
      
       fs.appendFile("client.json",JSON.stringify(json),(e)=>{
       console.log("error");

       });

 
switch(url){
    
    case "/welcom.html":
        res.setHeader("content-type", "text/html");
        res.write(welcomPage);
       

        break;
    
 }
 res.end();
 })
}



}).listen(7000, () => {
    console.log("http://localhost:7000");
  });