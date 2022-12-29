import {database} from "../module/database.js";
import clear from "../module/clearinput.js";

let db = null

database.onsuccess = ()=>{
db = database.result
}
function User(name , lastname , phone , password , id){
this.id = id
this.name = name,
this.lastname =lastname,
this.phone = phone
this.password = password

}
let name = document.getElementById('name')
let lastname = document.getElementById('lastname')
let phone = document.getElementById('phone')
let password = document.getElementById('password')
let bnt = document.querySelector('button')

bnt.addEventListener('click' , ()=>{
let newuser = new User(name.value, lastname.value , phone.value  ,password.value , Math.floor(Math.random()*9999999))

if(name.value != "" && password.value != ''&& phone.value != "" && lastname.value != "" ){
    let transaction = db.transaction("users" , "readwrite")
let store = transaction.objectStore("users")
store.add(newuser)
alertify.success("great success sabt")
clear(name , lastname,password,phone)
setTimeout(() => {
    location.href = "homeall.html"
}, 1000);
}
else{
    alertify.error("please corrected Value")
}




})
// function clearinput(){
//     name.value =""
//     lastname.value =""
//     phone.value =""
//     password.value =""
// }