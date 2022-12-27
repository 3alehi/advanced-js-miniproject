const name = document.getElementById('name')
const password = document.getElementById('password')
const codemeli = document.getElementById('codemeli')
const submit = document.getElementById('submit')
let database = indexedDB.open("schools" , 1)
let db = null
let table = document.querySelector("table")

database.onsuccess = ()=>{
    db = database.result
}
database.onupgradeneeded = ()=>{
    db = database.result
    if(!db.objectStoreNames.contains("user")){
        db.createObjectStore("user" , {keyPath:"id"})
    }
}
submit.addEventListener('click' , ()=>{
    db = database.result

    let newuser = {
        id: Math.floor(Math.random() * 100000),
        name: name.value,
        password: password.value,
        codemeli:codemeli.value
    }
    let transaction = db.transaction("user" , 'readwrite')
    let store = transaction.objectStore('user')
    store.add(newuser)
    getuserdatabase()

})

function getuserdatabase(){
    db =  database.result
    let transaction = db.transaction("user" , 'readonly')
        let store = transaction.objectStore('user')
        let users = store.getAll()
        users.onsuccess = (e)=>{
            let usersget = e.target.result
            table.innerHTML=""
        if(usersget.length != 0){
            table.innerHTML = `
            <tr>
            <th>id</th>
            <th>name</th>
            <th>password</th>
            <th>codeMeli</th>
            <th>option</th>
        </tr>`
        }
            usersget.map(element => {
                table.innerHTML += `
                <th>${element.id}</th>
                <th>${element.name}</th>
                <th>${element.password}</th>
                <th>${element.codemeli}</th>
                <th onclick="del(${element.id})">Delete</th>
                
                `
            });

        }
    
    
    
    }
  
function del(i){
    db = database.result
    let transaction = db.transaction('user' , 'readwrite')
    let store = transaction.objectStore("user")
    store.delete(i)
    getuserdatabase()
}
    setTimeout(()=>{
        getuserdatabase()
    },100)