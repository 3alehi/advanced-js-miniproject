let database = indexedDB.open("product",1)
let db = null
let allusers =null


database.addEventListener('success' , ()=>{
    
    db = database.result
    getusers()
})

database.addEventListener("upgradeneeded" , ()=>{
 db = database.result
if(!db.objectStoreNames.contains("users")){
    db.createObjectStore("users" , {keyPath:"id"})
  
}

})
function getusers(){
    let tx = db.transaction("users", "readonly")
    let store = tx.objectStore("users")
    let get = store.getAll()
    get.onsuccess = (e)=>{
    allusers = e.target.result
}

}

// setTimeout(() => {
//     console.log(db)

// }, 100);





export {database ,allusers }