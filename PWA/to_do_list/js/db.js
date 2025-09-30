
var dbPromise = idb.open('ToDoList',4,function(upgradeDB){
    console.log('create Table tasks')
     upgradeDB.createObjectStore('Tasks',{keyPath:'id'})
    
   // var store = upgradeDB.transaction.objectStore('Products')

})

window.onload=function(){
    let titleInput=this.document.querySelector("#TypeTask");
     let hoursInput=this.document.querySelector("#Typehours");
      let minInput=this.document.querySelector("#Typemin");
       let dayInput=this.document.querySelector("#day");
        let monthInput=this.document.querySelector("#month");
         let yearInput=this.document.querySelector("#year");
           let ul=document.querySelector("ul");
let tasksProm=getTasks();
tasksProm.then(taskArr=>{
    taskArr.forEach(task => {
        
        let li=document.createElement("li");
        li.innerHTML=task.title;
      
        ul.appendChild(li)
    });
})

     
   

    this.document.getElementById('AddBtn').onclick = function(){
        let title=titleInput.value;
         let hours=hoursInput.value;
          let min=minInput.value;
          let day=dayInput.value;
          let month=monthInput.value;
          let year=yearInput.value;
        let taskComplete={
            id: Date.now(),
            title:title,
            hours:hours,
            min:min,
            day:day,
            month:month,
            year:year
        }
        AddProducts(taskComplete);
        ul.innerHTML=""
    let tasksProm=getTasks();
tasksProm.then(taskArr=>{
    taskArr.forEach(task => {
        
        let li=document.createElement("li");
        li.innerHTML=task.title;
      
        ul.appendChild(li)
    });
})}

}

function AddProducts(task){
dbPromise.then(db=>{
      var tx = db.transaction('Tasks','readwrite')
        var table = tx.objectStore('Tasks')

       
        
       
        return table.add(task)
    
      .then(()=>{
        console.log('items added');
        scheduleNotification(task)
       
      })
      .catch(err=>{
        tx.abort()
        console.log(err)
      })
    })
    .catch(err=>{
        console.log(err)
}) 

}

function getTasks(){
    return dbPromise.then(db=>{
        var transaction=db.transaction("Tasks","readonly");
        var table=transaction.objectStore("Tasks");

    return table.getAll();
    })
}


function scheduleNotification(task) {
    const now = new Date();
    const taskTime = new Date(task.year, task.month - 1, task.day, task.hour, task.min);
    const delay = taskTime - now;

    if (delay > 0) {
        setTimeout(() => {
            navigator.serviceWorker.getRegistration().then(reg => {
                reg.showNotification("Task Reminder", {
                    body: `Your task "${task.title}" is due now!`,
                    icon: 'images/notification-flat.png',
                    actions: [
                        { action: 'explore', title: 'Open app' },
                        { action: 'close', title: 'Dismiss' }
                    ]
                });
            });
        }, delay);

        console.log(`Notification scheduled in ${delay / 1000} seconds`);
    } else {
        console.log("Task time is in the past, no notification scheduled.");
    }
}