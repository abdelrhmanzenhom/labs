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
    case "/clients": 
      res.setHeader("content-type", "application/json");
      fs.readFile("client.json", "utf-8", (err, data) => {
        if (err) {
          res.write("error"); 
        } else {
          res.write(data);
        }
        res.end();
      });
      return;
    case "/scripts/mian.js":
  res.setHeader("content-type", "application/javascript");
  fs.readFile("../client/scripts/mian.js", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
  return;
    

 }
 res.end();
}
else if(req.method=="POST"){
    req.on("data",(data)=>{

 const parameters=new URLSearchParams(data.toString());
 let json = {};
 let clints=[];
for (let [key, value] of parameters.entries()) {
  json[key] = value;
  
}


       // console.log(url);
     console.log(parameters)
    
       welcomPage= welcomPage.replace("{clientName}",parameters.get("username"));
       welcomPage=welcomPage.replace("{mobileNumber}",parameters.get("number"));
       welcomPage=welcomPage.replace("{email}",parameters.get("email"));
       welcomPage=welcomPage.replace("{address}",parameters.get("address"));
      
     const filePath = "client.json";
    fs.readFile(filePath,"utf-8",(err,data) => {
      let clients = [];

      if (!err&&data.trim().length>0) {
        try {
          clients = JSON.parse(data);
        } catch (e) {
          console.error("error");
          clients = [];
        }
      }
      clients.push(json);
      fs.writeFile(filePath, JSON.stringify(clients,null,2),(err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Client saved successfully!");
        }
      });
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