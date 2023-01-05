let input = document.querySelector('input')
let city = document.getElementById('city')
let l = document.getElementById("l")
let t = document.getElementById('t')
let country = document.getElementById("country")
input.addEventListener('keydown' , (e)=>{

if(e.key == 'Enter'){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=0839c82d5d496dbb12b10b594acca61c`)
.then(res => res.json())
.then(data =>{
    input.value= ""
    country.innerHTML = data.sys.country
    city.innerHTML =data.name
    l.innerHTML = data.main.humidity
    t.innerHTML = data.main.temp_max

})
.catch(err =>{
    console.log(new Error("country not found"))
})


}
})