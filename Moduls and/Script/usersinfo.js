import {database , allusers} from "../module/database.js";
let table = document.getElementById('table')
let getuser = new Promise((sucess , error)=>{
setTimeout(() => {
    if(allusers){

        sucess()
    }
    else{
        error()
    }
}, 1000);

})



function success(){
    table.innerHTML = `
    
  <table>
  <tr>
      <th>id</th>
      <th>name</th>
      <th>lastname</th>
      <th>phone</th>
      <th>password</th>
  </tr>
</table>`
    allusers.map(function(users){
        table.innerHTML +=`
        
  <table>
  <tr>
      <th>${users.id}</th>
      <th>${users.name}</th>
      <th>${users.lastname}</th>
      <th>${users.phone}</th>
      <th>${users.password}</th>
      </tr>
</table>`

    })
}

function error(){
    console.log("Error")
}
getuser.then(success , error)

function del(){
    console.log(44)
}
