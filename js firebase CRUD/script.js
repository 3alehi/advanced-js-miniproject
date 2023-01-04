let form = document.querySelector("form")
let name = document.getElementById('name')
let carduser = document.getElementById('cardusers')
let password = document.getElementById("password")
let users = null

form.addEventListener('submit' , (e)=>{
e.preventDefault()
sendusertodb()
})

function sendusertodb(){
    let user = {
name:name.value,
password:password.value
    }

    fetch('https://test-372f0-default-rtdb.firebaseio.com/users.json' ,{
        method:"POST",
        headers:{
"content-type":"apliction/json"
       },
       body:JSON.stringify(user)
    })
    .then(re => {
        getuserinDB()
        clearinput()

    })
}
function clearinput(){

    name.value=""
    password.value = ""
}
 function getuserinDB(){


     fetch('https://test-372f0-default-rtdb.firebaseio.com/users.json')
    .then(response =>{
           return response.json()
        
    })
    .then(data=>{
            users = Object.entries(data)
            console.log(data)
            carduser.innerHTML =""
            users.forEach(user =>{
                carduser.innerHTML +=`
                <div class="card">
                <img src="download.jfif" alt="">
                <h2>name: ${user[1].name} </h2>
                <h3>pass: ${user[1].password}</h3>
                <div class="btn">
                    <button class="d" onclick="delete1('${user[0]}')">Delete</button>
                <button class="e" onclick="edit('${user[0]}')">Edite</button>
                
                </div>
                
                `
              
            })
        

})
}

function delete1(id){
    fetch(`https://test-372f0-default-rtdb.firebaseio.com/users/${id}.json`,{
        method:"DELETE"
    })
    .then(res =>{
        console.log(res)
        getuserinDB()
    })

}

getuserinDB()
function edit(id){
    let newname = prompt("name")
    let newpass = prompt("pass")
    let newuser={
        name:newname,
        password:newpass
    }
    fetch(`https://test-372f0-default-rtdb.firebaseio.com/users/${id}.json`,{
        method:"PUT",
        headers:{
            'content-type':'apliction/json'
        },
        body: JSON.stringify(newuser)
    })
    .then(res =>{
        console.log(res)
        getuserinDB()
    })

}