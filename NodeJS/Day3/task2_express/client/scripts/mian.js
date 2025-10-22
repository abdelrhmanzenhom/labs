let clientsButt=document.getElementById("clientsButt")
clientsButt.addEventListener("click", () => {
  fetch("/clients")
    .then(res => res.json())
    .then(data => {
     
      let container = document.getElementById("clientsList");
      container.innerHTML = ""; 
       container.setAttribute("style",`display: grid; grid-template-columns: repeat(auto-fit,minmax(320px, 1fr));gap:20px;
        padding:20px;
        background-color:#f5f7fa;
      `);

      if(data.length == 0){
        container.innerHTML = "<p>No clients found.</p>";
        return;
      }

      data.forEach(client => {
        let div = document.createElement("div");
        let deleteButt=document.createElement("button");
        deleteButt.innerText="delete";

          let updateButt = document.createElement("button");
           updateButt.innerText = "Update";
           updateButt.setAttribute("style", `background-color: #3498db;
            color: white;
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;`);


        deleteButt.setAttribute("style",` background-color: #4CAF50;
            color: white;
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;`);
            
          

       div.setAttribute("style", `
          background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius: 15px;padding: 25px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          color: white;
          min-height: 200px;
        `);
        div.addEventListener('mouseenter',() => {
          div.style.transform = 'translateY(-5px)';
          div.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
        });
        div.addEventListener('mouseleave',() => {
          div.style.transform = 'translateY(0)';
          div.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
        div.innerHTML = `
          <h3>${client.username}</h3>
          <p>Mobile: ${client.number}</p>
          <p>Email: ${client.email}</p>
          <p>Address: ${client.address}</p>
          <hr>
        `;
        
        div.appendChild(deleteButt);
        div.appendChild(updateButt);
        

          deleteButt.onclick=()=>{
              fetch(`/clients/${client.email}`, { method: "DELETE" })
          .then(res => res.json())
          .then(result => {
           // console.log(result);
           
           div.remove();
    
                  
            })

          };

          updateButt.onclick = () => {
          let newName = prompt("Enter new name:", client.username);
          let newNumber = prompt("Enter new number:", client.number);
          let newAddress = prompt("Enter new address:", client.address);

          if (!newName || !newNumber || !newAddress) {
            alert("Update cancelled. All fields are required.");
            return;
          }

          fetch(`/clients/${client.email}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: newName,
              number: newNumber,
              address: newAddress
            })
          })
            .then(res => res.json())
            .then(result => {
              // Refresh card content
              div.querySelector("h3").innerText = newName;
              div.querySelector("p:nth-of-type(1)").innerText = "Mobile: " + newNumber;
              div.querySelector("p:nth-of-type(3)").innerText = "Address: " + newAddress;
            })
            .catch(err => console.error(err));
        };

       
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error(err);
    });
});