const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 7000;
app.use("/style", express.static(path.join(__dirname, "../client/style")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get("/clients",(req,res)=>{
res.sendFile(path.join(__dirname, "client.json"));
})

let mainHtml = fs.readFileSync("../client/pages/main.html", "utf-8");
let welcomPageTemplate = fs.readFileSync("../client/pages/welcom.html", "utf-8");


app.get("/", (req, res) => {
  res.type("html").send(mainHtml);
});

app.get("/main.html", (req, res) => {
  res.type("html").send(mainHtml);
});
app.get("/scripts/mian.js",(req,res)=>{
res.sendFile(path.join(__dirname, "../client/scripts/mian.js"));
})

app.delete("/clients/:email",(req,res)=>{
  const data = fs.readFileSync("client.json", "utf-8");
  let clients=[];
    clients = JSON.parse(data);
    console.log(req.params.email);
    console.log()
    let afterDeleteArr=clients.filter((e)=>{
      return e.email!=req.params.email;
      console.log(e.email);
    })
    console.log(afterDeleteArr);
    fs.writeFileSync("client.json", JSON.stringify(afterDeleteArr, null, 2));

})
app.post("/welcom.html", (req, res) => {
  const { username, number, email, address } = req.body;

 
  let json = { username, number, email, address };


   let clients = [];
  try {
    const data = fs.readFileSync("client.json", "utf-8");
    clients = JSON.parse(data);
  } catch (err) {
   
    clients = [];
  }
  clients.push(json);
  fs.writeFileSync("client.json", JSON.stringify(clients, null, 2));
  let page = welcomPageTemplate
    .replace("{clientName}", username)
    .replace("{mobileNumber}", number)
    .replace("{email}", email)
    .replace("{address}", address);

  res.type("html").send(page);
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
