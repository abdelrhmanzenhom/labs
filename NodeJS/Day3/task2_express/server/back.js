const express = require("express");
const fs = require("fs");
const path = require("path");

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


app.delete("/clients/:email", (req, res) => {
  
  const email = req.params.email;

  
  let data = fs.readFileSync("client.json", "utf-8");
  let clients = JSON.parse(data);

  
  let newClients = clients.filter(c => c.email !== email);

  
  if (newClients.length === clients.length) {
    res.json({ message: "Client not found" });
    return;
  }

  
  fs.writeFileSync("client.json", JSON.stringify(newClients));

  res.json({ message: "Client deleted" });
});

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


app.put("/clients/:email", (req, res) => {
  const email = req.params.email;
  const { username, number, address } = req.body;


  let data = fs.readFileSync("client.json", "utf-8");
  let clients = JSON.parse(data);

  
  
  for (let i = 0; i < clients.length; i++) {
    if (clients[i].email === email) {
      if (username) clients[i].username = username;
      if (number) clients[i].number = number;
      if (address) clients[i].address = address;
      found = true;
      break;
    }
  }



  
  fs.writeFileSync("client.json", JSON.stringify(clients));

  res.json({ message: "Client updated" });
});




app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
