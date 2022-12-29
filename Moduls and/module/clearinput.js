function clear(...a){
let clear = new Array(...a)
clear.forEach(function(value){
    value.value = ""
})
}

export default clear