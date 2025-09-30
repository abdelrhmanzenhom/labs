var dbPromise = idb.open('TheDataBase',2,function(upgradeDB){
    console.log('create Table Orders')
    upgradeDB.createObjectStore('orders',{keyPath:'id'})
})


onload = function(){
    this.document.getElementById('btn').onclick = AddOrders
}

function AddOrders(){
    dbPromise.then(db=>{
        //create transaction--define table,permission
        var tx = db.transaction('orders','readwrite')
        var store = tx.objectStore('orders')

var items = [
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 7
        },
        {
          name: 'Stool',
          id: 'st-re-pin',
          price: 59.99,
          color: 'red',
          material: 'pine',
          description: 'A light, high-stool',
          quantity: 3
        },
        {
          name: 'Chair',
          id: 'ch-blu-pin',
          price: 49.99,
          color: 'blue',
          material: 'pine',
          description: 'A plain chair for the kitchen table',
          quantity: 1
        },
        {
          name: 'Dresser',
          id: 'dr-wht-ply',
          price: 399.99,
          color: 'white',
          material: 'plywood',
          description: 'A plain dresser with five drawers',
          quantity: 4
        },
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 11
        }
      ];

    return Promise.all(items.map(item=>{
        console.log('adding item',item)
        return store.add(item)
    }))
    .then(()=>{
        console.log('items added successfully')
    })

    })
    .catch(err=>{
        console.log(err)
    })
}