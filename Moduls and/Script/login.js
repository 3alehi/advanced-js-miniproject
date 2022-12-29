import {database , allusers} from "../module/database.js";
let name = document.getElementById("name")
let password = document.getElementById("password")
let button = document.querySelector("button")

button.addEventListener("click" , ()=>{

    let find = allusers.find(function(item){

        if(item.name == name.value && item.password == password.value){
return item

}
})
    if(name.value == "1" && password.value == "1"){

    alertify.success(" login succss")
    clearinput()
setTimeout(()=>{location.href = "productadmin.html"},1000)

}
else if(find){
    clearinput()

    alertify.success(" login succss")

    setTimeout(()=>{location.href = "productuser.html"+ find.id},1000)



}
else{
    clearinput()
    alertify.error("incroct Info")
}

})
function clearinput(){


    name.value=""
    password.value=""
}



