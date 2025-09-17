const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url,"this is the req");
  let arrOfOperations = req.url.split("/");

  //const objj=JSON.parse(req.url);
  //console.log(objj);
  
  
  
  function bouns(op,result,index){
   let message = "";
  for (let i = index; i < arrOfOperations.length; i++) {
    const num = parseInt(arrOfOperations[i]);
    //console.log(num)
    if (!isNaN(num)) {
      if (op == "add") {
        if (i == 2) result = 0;
        result += num;
        message += ` ${num} +`;
      } else if (op == "sub") {
        if (i == 0) result = 0;
        result -= num;
        message += ` ${num} -`;
      } else if (op == "multi") {
        result *= num;
        message += ` ${num} *`;
      } else if (op == "div") {
        result /= num;
        message += ` ${num} /`;
      } else {
        message = "error ";
      }
    }
  }
  
  return result;
  }
if ("favicon.ico" != arrOfOperations[1] || arrOfOperations[1] != ".well-known") {
  let fullmessage="this is the answer of";
  let res1=0;
  for (let i = 0; i < arrOfOperations.length; i++) {
   let result = 1;
   const num = parseInt(arrOfOperations[i]);
   if(arrOfOperations[i]=="add"||arrOfOperations[i]=="sub"){
const op = arrOfOperations[i];

   res1+=bouns(op,result,i);
   console.log(res1)
   }
   
  }
  console.log(res1)
  if (fullmessage != "error") fullmessage += ` = ${res}`;
}
  
 // message = message.slice(0, -1);
  
  //console.log(message);

  //console.log(result);
 /*  const fs = require("fs");
  if ("favicon.ico" != op && op != ".well-known") {
    fs.writeFileSync("task.json", fullmessage);
    const file_content = fs.readFile("task.json", "utf-8", (error, data) => {
      // console.log(data);
      res.write(data);
      res.end();
    });
  } */
  //console.log(file_content);
});
server.listen(8080, () => {
  console.log("http://localhost:8080/");
});







/* 
const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url,"this is the req");
  let arrOfOperations = req.url.split("/");

  //const objj=JSON.parse(req.url);
  //console.log(objj);
  
  
  
  function bouns(op,result,index){
   let message = "";
  for (let i = index; i < arrOfOperations.length; i++) {
    const num = parseInt(arrOfOperations[i]);
    //console.log(num)
    if (!isNaN(num)) {
      if (op == "add") {
        if (i == 2) result = 0;
        result += num;
        message += ` ${num} +`;
      } else if (op == "sub") {
        if (i == 0) result = 0;
        result -= num;
        message += ` ${num} -`;
      } else if (op == "multi") {
        result *= num;
        message += ` ${num} *`;
      } else if (op == "div") {
        result /= num;
        message += ` ${num} /`;
      } else {
        message = "error ";
      }
    }
  }
  
  return result;
  }
if ("favicon.ico" != arrOfOperations[1] || arrOfOperations[1] != ".well-known") {
  let fullmessage="this is the answer of";
  let res1=0;
  for (let i = 0; i < arrOfOperations.length; i++) {
   let result = 1;
   const num = parseInt(arrOfOperations[i]);
   if(arrOfOperations[i]=="add"||arrOfOperations[i]=="sub"){
const op = arrOfOperations[i];

   res1+=bouns(op,result,i);
   console.log(res1)
   }
   
  }
  console.log(res1)
  if (fullmessage != "error") fullmessage += ` = ${res}`;
}
  
 // message = message.slice(0, -1);
  
  //console.log(message);

  //console.log(result);
 /*  const fs = require("fs");
  if ("favicon.ico" != op && op != ".well-known") {
    fs.writeFileSync("task.json", fullmessage);
    const file_content = fs.readFile("task.json", "utf-8", (error, data) => {
      // console.log(data);
      res.write(data);
      res.end();
    });
  } */
  //console.log(file_content);
//});
//server.listen(8080, () => {
  //console.log("http://localhost:8080/");
//});
